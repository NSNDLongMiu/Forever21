const register = (username, email, password, password_confirmation) => {
    fetch("http://192.168.0.5:8797/users",
    {   
        method: 'POST',
        body: ({
            'username': username ,
            'password':password ,
            'email': email ,
            'password_confirmation': password_confirmation 
        })
    })
    .then(res => res.json())
};

module.exports = register;
