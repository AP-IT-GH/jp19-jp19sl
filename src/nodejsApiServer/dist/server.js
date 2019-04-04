"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const locker_1 = require("./models/locker");
const reservation_1 = require("./models/reservation");
const student_1 = require("./models/student");
let cors = require("cors");
let app = express_1.default();
let server = require("http").createServer(app);
let io = require("socket.io")(server);
let changeStream = locker_1.Locker.watch(); // { fullDocument: "updateLookup" } meegeven als parameter voor het volledige document terug te krijgen
let port = 3000;
let router = express_1.default.Router();
mongoose.connect("mongodb://localhost:27017/smartlocker?replicaSet=rs0").catch((err) => console.log(err));
changeStream.on("change", (change) => {
    console.log(change);
    io.emit("changeData", change);
});
io.on("connection", function (client) {
    console.log("Client " + client.id + " connected...");
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// // all of our routes are prefixed with /api
// ------------- LOCKER ---------------------------------------
// GET localhost:8080/api/lockers
app.use("/api", router);
router.route("/lockers").get((req, res) => {
    console.log("lockers get called");
    locker_1.Locker.find().populate("reservation").then((data) => {
        res.json(data);
    });
});
// GET localhost:8080/api/lockers/<id>
router
    .route("/lockers/:id")
    .get((req, res) => {
    const id = req.params.id;
    locker_1.Locker.findById(id).then((data) => {
        res.json(data);
    });
})
    // PUT localhost:8080/api/lockers/<id>
    .put((req, res) => {
    const updatedLocker = req.body;
    const id = req.params.id;
    locker_1.Locker.findByIdAndUpdate(id, updatedLocker, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.sendStatus(200);
        }
    });
});
// ---------------- STUDENTS -----------------------------
router
    .route("/students")
    .get((req, res) => {
    student_1.Student.find().then((data) => {
        res.json(data);
    });
})
    .post((req, res) => {
    const student = req.body;
    student_1.Student.create(student, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.sendStatus(200);
        }
    });
});
router
    .route("/students/:id")
    .get((req, res) => {
    const id = req.params.id;
    student_1.Student.findById(id).then((data) => {
        res.json(data);
    });
})
    // PUT localhost:8080/api/Student/<id>
    .put((req, res) => {
    const updatedStudents = req.body;
    const id = req.params.id;
    student_1.Student.findByIdAndUpdate(id, updatedStudents, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.sendStatus(200);
        }
    });
});
// ---------------- Reservations -----------------------------
router
    .route("/reservations")
    .get((req, res) => {
    reservation_1.Reservation.find().populate("student").then((data) => {
        res.json(data);
    });
})
    .post((req, res) => {
    const reservation = req.body;
    reservation_1.Reservation.create(reservation, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            // const lockerToUpdate = Locker.findById(req.body.locker);
            res.sendStatus(200);
        }
    });
});
router
    .route("/reservations/:id")
    .get((req, res) => {
    const id = req.params.id;
    reservation_1.Reservation.findById(id).then((data) => {
        res.json(data);
    });
})
    // PUT localhost:8080/api/Student/<id>
    .put((req, res) => {
    const updatedReservation = req.body;
    const id = req.params.id;
    reservation_1.Reservation.findByIdAndUpdate(id, updatedReservation, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.sendStatus(200);
        }
    });
});
server.listen(port);
console.log("started the server at 127.0.0.1:" + port);
//# sourceMappingURL=server.js.map