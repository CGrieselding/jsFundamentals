const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Test endpoint
router.get('/test', (req, res) => {
    res.send('Your message')
});

// Register a user
router.post('/register', (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body.user;

    User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 13)
    })
    .then(user => res.status(201).json({message: 'New User Created!', user}))
    .catch(error => res.status(500).json({message: 'Something went wrong at /register', error}))

    // res.send('User register endpoint')

});

// Log in a user
router.post('/login', (req, res) => {
    // What are the steps to log in?
    // 1. get information from the client (user)

    const { email, password } = req.body

    // 2. find a user with a matching email from the server

    User.findOne({
        where: {
            email
        }
    })
    // 3. compare the password and make sure it matches
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, matches) => {
                if(matches){

                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: '1d'} )

                    res.status(200).json({ 
                        message: 'Login successful!',
                        sessionToken: token
                    })
                } else {
                    res.status(502).json({ error: 'Bad Gateway' })
                }
            })
        } else {
            res.status(500).json({message: 'Failed to authenticate'})
        }
    })
    // 4. If it matches, they log in -- if it doesn't match, try again
    
});

module.exports = router;