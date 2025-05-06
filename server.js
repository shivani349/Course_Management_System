const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const Teacher = require('./models/teacher');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb+srv://shivani23cse:rNBuM1xTUm0p59nt@cluster0.vcb2sgz.mongodb.net/teacherDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));



// Add Teacher Route
app.post('/api/teachers', async (req, res) => {
    const { name, subject, email, phone } = req.body;
    try {
        // const teacher = new Teacher(req.body);
        const teacher = new Teacher({ name, subject, email, phone });
        await teacher.save();
        res.status(201).json({ message: 'Teacher added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding teacher', error });
    }
    //     res.status(201).send(teacher);
    // } catch (err) {
    //     res.status(500).send({ error: err.message });
    // }
});




// Get All Teachers Route
app.get('/api/teachers', async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teachers', error });
    }
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Course_Management_System-main\adminteacher.html'));
    
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

