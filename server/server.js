const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware')

const app = express();
const PORT = 4000;

//backend and frontend connect
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/registration');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Task Schema
const RegisteruserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minLenght: 8,
        maxLength: 32,
    },
    role: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Registeruser = mongoose.model('Registeruser', RegisteruserSchema);

//post the register data
app.use(express.json());
app.post('./register', async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;
        let exist = await Registeruser.findOne({ email })
        if (exist) {
            return res.status(400).send('User Already Exist')
        }
        if (password !== confirmpassword) {
            return res.status(400).send('Password asre not matching')
        }
        let newUser = new Registeruser({
            username,
            email,
            password,
            confirmpassword,
        })
        await newUser.save();
        res.status(200).send('Registerd Successfully')
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Internet Server Error')
    }
})
//login 
app.post('./login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let exist = await Registeruser.findOne({ email })
        if (!exist) {
            return res.status(400).send('User Not Found')
        }
        if (exist.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user: {
                id: exist.id
            }
        }
        //jwt token
        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 },
            (err, token) => {
                if (err) throw err;
                return res.json({ token })
            }
        )
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('sever Error')
    }
})
//Router
app.get('/myprofile', middleware, async (req, res) => {
    try {
        let exist = await Registeruser.findById(req.user.id)
        if (!exist) {
            return res.status(400).send('User Not Found')
        }
        res.json(exist)
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('server Error')
    }
})


app.listen(PORT, () => {
    console.log(`Server running..... at ${PORT}`);
});