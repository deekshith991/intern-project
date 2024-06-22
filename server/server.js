const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./modules/users.js');
const AddJOB = require('./modules/job.js')

const app = express();
const PORT = 4000;
const mongoURI = 'mongodb://localhost:27017';
const DB_NAME = "projectdb";


//backend and frontend connect
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());


// MongoDB connection
mongoose.connect(`${mongoURI}/${DB_NAME}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


// ///post the register data
// app.post('/register', async (req, res) => {
//     try {
//         const { Account, firstName, lastName, email, password, Phone, Address, Pincode } = req.body;
//         let exist = await User.findOne({ email })
//         if (exist) {
//             return res.status(400).send('User Already Exist')
//         }

//         let newUser = new User({
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


app.post('/api/register', async (req, res) => {
    try {
        const { Account, firstName, lastName, email, password, Phone, Address, Pincode } = req.body;
        let exist = await Users.findOne({ email })
        if (exist) {
            return res.status(400).send('User Already Exist')
        }

        let newUser = new Users({
            Account,
            firstName,
            lastName,
            email,
            password,
            Phone,
            Address,
            Pincode
        })

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);



        await newUser.save();
        const payload = {
            newUser: {
                id: newUser.id,
            },
        };

        jwt.sign(
            payload,
            'jwtSecret',
            { expiresIn: 3600 }, // Token expiration time (1 hour)
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// login user
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await Users.findOne({ username });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'jwtSecret',
            { expiresIn: 3600 }, // Token expiration time (1 hour)
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.get('/api/getjobs', async (req, res) => {
    try {
        const tasks = await jobs.find();
        res.send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.post('/api/registerjob', async (req, res) => {
    try {

        let newjob = new AddJOB(req.body)
        await newjob.save();
        res.status(200).send('success');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/getjobs', async (req, res) => {
    try {
        const data = await AddJOB.find();
        res.status(200).send(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
})


app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.send(task);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(PORT, () => {
    console.log(`Server running..... at ${PORT}`);
});