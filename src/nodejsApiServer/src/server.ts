import * as bodyParser from "body-parser";
import express from "express";
import { Request, Response } from "express";
// import * as mongoose from "mongoose";
import mongoose = require("mongoose");
import {Locker} from "./models/locker";
import {Reservation} from "./models/reservation";
import {Student} from "./models/student";
const app = express();

mongoose.connect("mongodb://localhost:27017/smartlocker").catch((err) => console.log(err));

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
const router = express.Router();
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// ------------- LOCKER ---------------------------------------
// GET localhost:8080/api/lockers
app.use("/api", router);
router.route("/lockers")
    .get((req: Request,  res: Response) => {
        Locker.find()
            .then((data) => {
                res.json(data);
            });

    });
// GET localhost:8080/api/lockers/<id>
router.route("/lockers/:id")
    .get((req: Request, res: Response) => {
        const id = req.params.id;
        Locker.findById(id)
            .then((data) => {
                res.json(data);
            });
    })
    // PUT localhost:8080/api/lockers/<id>
    .put((req: Request, res: Response) => {
        const updatedLocker = req.body;
        const id = req.params.id;
        Locker.findByIdAndUpdate(id, updatedLocker, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });
// ---------------- STUDENTS -----------------------------
router.route("/students")
    .get((req: Request, res: Response) => {
        Student.find()
            .then((data) => {
                res.json(data);
            });
    })
    .post((req: Request, res: Response) => {
        const student = req.body;
        Student.create(student, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });
router.route("/students/:id")
    .get((req: Request, res: Response) => {
        const id = req.params.id;
        Student.findById(id)
            .then((data) => {
                res.json(data);
            });
    })
    // PUT localhost:8080/api/Student/<id>
    .put((req: Request, res: Response) => {
        const updatedStudents = req.body;
        const id = req.params.id;
        Student.findByIdAndUpdate(id, updatedStudents, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });
// ---------------- Reservations -----------------------------
router.route("/reservations")
    .get((req: Request, res: Response) => {
        Reservation.find()
            .then((data) => {
                res.json(data);
            });
    })
    .post((req: Request, res: Response) => {
        const reservation = req.body;
        Reservation.create(reservation, (err) => {
            if (err) {
                res.send(err);
            } else {
                const lockerToUpdate = Locker.findById(req.body.locker);
                res.sendStatus(200);
            }
        });
    });
router.route("/reservations/:id")
    .get((req: Request, res: Response) => {
        const id = req.params.id;
        Reservation.findById(id)
            .then((data) => {
                res.json(data);
            });
    })
    // PUT localhost:8080/api/Student/<id>
    .put((req: Request, res: Response) => {
        const updatedReservation = req.body;
        const id = req.params.id;
        Reservation.findByIdAndUpdate(id, updatedReservation, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    });

app.listen(port);
console.log("127.0.0.1:" + port);
