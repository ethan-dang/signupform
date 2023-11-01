const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize('AUTOMATIONTEAM', 'sa', '12345678', {
  dialect: 'mssql',
  host: 'localhost',
  dialectOptions: {
    encrypt: true
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection is successful');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Signup = sequelize.define('Signup', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    fullName: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING },
}, {
  tableName: 'Signup',
  timestamps: false,
});

// Define a route to retrieve all data from the Signup table
app.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM Signup';
        const [results] = await sequelize.query(query);
        res.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Handle user input for signup
app.post('/signup', async (req, res) => {
    try {
      // Extract user data from the request body
      const { email, password, fullName, position, phone, address } = req.body;
  
      // Create a new user record in the Signup table without createdAt and updatedAt
      const newUser = await Signup.create({
        email,
        password,
        fullName,
        position,
        phone,
        address,
      });
  
      // Respond with the newly created user
      res.json(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Error registering user' });
    }
});

// Handle user input for login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Compare the login details with the database
    const user = await Signup.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
        password: {
          [Op.eq]: password,
        },
      },
    });

    if (user) {
      // User found
      return res.json('Success');
    } else {
      // User not found
      return res.json('Failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json('Error');
  }
});

// Define a route to retrieve all data from the Signup table
app.get('/signup', async (req, res) => {
  try {
    // Use the model's `findAll` method to retrieve all records from the Signup table
    const users = await Signup.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json(users);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port`, port);
});