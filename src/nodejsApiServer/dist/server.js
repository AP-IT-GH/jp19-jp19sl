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
let port = 8080;
let router = express_1.default.Router();
// mongoose.connect("mongodb://mongodb-1-servers-vm-0/smartlocker?replicaSet=rs0").catch((err) => console.log(err));
mongoose
    .connect("mongodb+srv://testuser:testuserpwd@smartlockerdb-zeh7l.gcp.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
})
    .catch((err) => console.log(err));
changeStream.on("change", (change) => {
    io.emit("changeData", change);
});
io.on("connection", function (client) {
    console.log("Client " + client.id + " connected...");
    io.emit("connected", "Client " + client.id + " connected...");
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// // all of our routes are prefixed with /api
// ------------- LOCKER ---------------------------------------
// GET localhost:8080/api/lockers
app.use("/api", router);
router.route("/lockers").get((req, res) => {
    locker_1.Locker.find().populate("reservation").then((data) => {
        res.json(data);
    });
});
// GET localhost:8080/api/lockers/<id>
router
    .route("/lockers/:id")
    .get((req, res) => {
    const id = req.params.id;
    locker_1.Locker.findById(id)
        .then((data) => {
        res.json(data);
    })
        .catch(() => res.sendStatus(404));
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
            res.status(400);
            res.send(err.message);
        }
        else {
            res.sendStatus(201);
        }
    });
});
router
    .route("/students/:studentNumber")
    //GET localhost:8080/api/Students/<student_number>
    .get((req, res) => {
    const studentNumber = req.params.studentNumber;
    student_1.Student.find({ student_number: studentNumber })
        .then((data) => {
        if (data.length > 0)
            res.json(data);
        else
            res.sendStatus(404);
    })
        .catch(() => res.sendStatus(404));
})
    //PUT localhost:8080/api/Students/<student_number>
    .put((req, res) => {
    const updatedStudent = req.body;
    const studentNumber = req.params.studentNumber;
    student_1.Student.findOneAndUpdate({ student_number: studentNumber }, updatedStudent, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.sendStatus(200);
        }
    });
});
router.route("/students/:studentNumber/reservations").get((req, res) => {
    const studentNumber = req.params.studentNumber;
    student_1.Student.findOne({ student_number: studentNumber }).then((data) => {
        reservation_1.Reservation.find({
            student: data._id
        })
            .populate("locker")
            .then((reservations) => {
            res.json(reservations);
        });
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
            res.sendStatus(201);
        }
    });
});
router
    .route("/reservations/:id")
    .get((req, res) => {
    const id = req.params.id;
    reservation_1.Reservation.findById(id)
        .then((data) => {
        res.json(data);
    })
        .catch(() => res.sendStatus(404));
})
    // PUT localhost:8080/api/Reservations/<id>
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
})
    .delete((req, res) => {
    const id = req.params.id;
    reservation_1.Reservation.deleteOne({ _id: id }, (err) => {
        if (err)
            res.send(err);
        else
            res.sendStatus(200);
    });
});
server.listen(port);
console.log("started the server at 127.0.0.1:" + port);
//# sourceMappingURL=server.js.map