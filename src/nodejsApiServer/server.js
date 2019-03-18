let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Locker = require('./models/locker');
let Reservation = require('./models/reservation');
let Student = require('./models/student');
mongoose.connect('mongodb://localhost:27017/smartlocker', {
    useNewUrlParser: true
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
// ROUTES
// =============================================================================
var router = express.Router();



// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// ------------- LOCKER ---------------------------------------
// GET localhost:8080/api/lockers
app.use('/api', router);
router.route('/lockers')
    .get((req, res) => {
        Locker.find()
            .then((data) => {
                res.json(data);
            })
    })
// GET localhost:8080/api/lockers/<id>
router.route('/lockers/:id')
    .get((req, res) => {
        let id = req.params.id;
        Locker.findById(id)
            .then((data) => {
                res.json(data);
            })
    })
    // PUT localhost:8080/api/lockers/<id>
    .put((req, res) => {
        let updatedLocker = req.body;
        let id = req.params.id;
        Locker.findByIdAndUpdate(id, updatedLocker, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });
// ---------------- STUDENTS -----------------------------
router.route('/students')
    .get((req, res) => {
        Student.find()
            .then((data) => {
                res.json(data);
            })
    })
    .post((req, res) => {
        let student = req.body;
        Student.create(student, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    })
router.route('/students/:id')
    .get((req, res) => {
        let id = req.params.id;
        Student.findById(id)
            .then((data) => {
                res.json(data);
            })
    })
    // PUT localhost:8080/api/Student/<id>
    .put((req, res) => {
        let updatedLocker = req.body;
        let id = req.params.id;
        Student.findByIdAndUpdate(id, updatedLocker, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });
// ---------------- STUDENTS -----------------------------

app.listen(port);
console.log('127.0.0.1:' + port);