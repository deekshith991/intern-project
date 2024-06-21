const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Registeruser = require('./modules/users.js');
const AddJOB = require('./modules/job.js')

const app = express();
const PORT = 4000;

//backend and frontend connect
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());


// MongoDB connection
const DB_NAME = "internship-Project-dev";
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


// ///post the register data
// app.post('/register', async (req, res) => {
//     try {
//         const { Account, firstName, lastName, email, password, Phone, Address, Pincode } = req.body;
//         let exist = await Registeruser.findOne({ email })
//         if (exist) {
//             return res.status(400).send('User Already Exist')
//         }

//         let newUser = new Registeruser({
//             Account,
//             firstName,
//             lastName,
//             email,
//             password,
//             Phone,
//             Address,
//             Pincode
//         })
//         await newUser.save();
//         res.status(200).send('Registerd Successfully')
//     }
//     catch (err) {
//         console.log(err)
//         return res.status(500).send('Internet Server Error')
//     }
// });

// app.post('/addjob', async (req, res) => {
//     try {
//         const { company, position, status, workType, workLocation } = req.body;

//         let newJOB = new AddJOB({
//             company, position, status, workType, workLocation
//         })
//         await newJOB.save();
//         res.status(200).send('Registerd Successfully')
//     }
//     catch (err) {
//         console.log(err)
//         return res.status(500).send('Internet Server Error')
//     }
// });


app.listen(PORT, () => {
    console.log(`Server running..... at ${PORT}`);
});