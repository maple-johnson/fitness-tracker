import express from 'express';
import { validateForm } from './services/validation.js';

const app = express();
const PORT = 3000;
const workouts = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
    res.render('home');
});

app.post('/summary', (req, res) => {
    const workout = {
        woType: req.body.woType,
        woTime: req.body.woTime,
        woLevel: req.body.woLevel,
        woDate: req.body.woDate,
        woNotes: req.body.woNotes,
    };

    const result  = validateForm(workout);
    if(!result.isValid) {
        console.log(result.errors);
        res.send(result.errors);
        return;
    }

    workouts.push(workout);
    console.log(workout);
    
    res.render('summary', { workouts });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
