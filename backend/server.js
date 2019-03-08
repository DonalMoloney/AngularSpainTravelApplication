import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Trip from './models/Trip';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//TODO you should first check if the trip table is there else create it.

mongoose.connect('mongodb://localhost:27017/TravelApp');

const connection = mongoose.connection;


connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});



// This returns a trip by id
router.route('/trip/:id').get((req, res) => {
    Trip.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

//This adds a trip
router.route('/trip/add').post((req, res) => {
    let issue = new Trip(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

//this updates a trip that user created
router.route('/trip/update/:id').post((req, res) => {
  //TODO implement
});

//this deletes a trip the user created
router.route('/trip/delete/:id').get((req, res) => {
    //TODO implement
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
