function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,100}$/;

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
    /*
    if(values.spassword === "") {
        error.spassword = "Should not be empty"; //need adjustment
    }
    else if(values.spassword !== values.password) {
        error.spassword = "Password did not match";
    } else {
        error.spassword = "";
    } */

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