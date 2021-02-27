const signIn = (username,  password) => (
    fetch("http://192.168.0.5:5000/login",
    {   
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
);


module.exports = signIn;
