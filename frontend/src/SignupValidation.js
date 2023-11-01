function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
<<<<<<< HEAD
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,100}$/;
    const phone_pattern = /^(?:\+\d{1,3})?\d{6,15}$/;
=======
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,100}$/;
>>>>>>> d49094d24d899d63127c62384305b5c9b2dd613c

    if(values.email === "") {
        error.email = "Email should not be empty";
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email does not match";
    } else {
        error.email = "";
    }

    if(values.password === "") {
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password did not match";
    } else {
        error.password = "";
    }

    if(values.fullName === "") {
        error.fullName = "Full name should not be empty";
    } else {
        error.fullName = "";
    }

    if(values.position === "") {
        error.position = "Position should not be empty";
    } else {
        error.position = "";
    }

    if(values.phone === "") {
        error.phone = "Phone number should not be empty";
    }
    else if(!phone_pattern.test(values.phone)) {
        error.phone = "This is not a phone number";
    } else {
        error.phone = "";
    }

    if(values.address === "") {
        error.address = "Address should not be empty";
    } else {
        error.address = "";
    }
    return error;
}

export default Validation;