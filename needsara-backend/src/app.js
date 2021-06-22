const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')

const app = express();

app.use(bodyParser.json()); 
app.use(cors());

require("./db/connect");
const UserDetails= require("./models/userDetails");

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
    // res.send(database.users);
});

// For User to signin using credentials
app.post('/signin_user', async(req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        const Name = await UserDetails.findOne({userName:userName});
        if(Name.password==password){
            res.json('success');
        }else{
            res.status(400).json('Error logging in');
        }
    } catch (error) {
        res.status(400).send("Invalid Username")
        console.log(error)
    }
})

// For User Registration in the database
app.post('/register_user', async(req,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.ConfirmPassword

        if(password===cpassword){
            const Register_User = new UserDetails({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                confirmPassword: req.body.ConfirmPassword
            }) 
            Register_User.save().then(
                () => {
                  res.status(201).json({
                    message: 'Post saved successfully!'
                  });
                }
              )
        }else{
            res.send("password are not matching");
            window.alert("Password Doesnot Match")
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})


app.listen(port, function() {
    console.log(new Date().toISOString() + `: server started on port ${port}`);
});


// app.post('/register_user', (req, res) => {
//     const { email, name, password, phone} = req.body; 

//     bcrypt.hash(password, 10, function(err, hash) {
//         // console.log(hash);
//     });

//     database.users.push({
//         id: '125',
//         name: name,
//         email: email,
//         password: password,
//         phone: phone
//     })
//     res.json(database.users[database.users.length-1]);
// })

// app.post('/signin_user', (req, res) => {
//     if(req.body.userName === database.users[0].userName  && req.body.password === database.users[0].password){
//         res.json('success');
//     }else{
//         res.status(400).json('Error logging in');
//     }
// })

// const database = {
//     users: [
//         {
//             id: '123',
//             userName: 'john',
//             email: 'john@gmail.com',
//             password: 'cookies',
//             phoneNumber: '9880012124'
//         },
//         {
//             id: '124',
//             userName: 'sally',
//             email: 'sally@gmail.com',
//             password: 'bananas',
//             phoneNumber: '9966985545'
//         }
//     ],
//     login: [
//         {
//             id: '987',
//             hash:'',
//             email: 'john@gmail.com'
//         }
//     ]
// }