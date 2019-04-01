import * as bodyParser from "body-parser";
import express from "express";
import { Request, Response } from "express";
import mongoose = require("mongoose");
import { Locker } from "./models/locker";
import { Reservation } from "./models/reservation";
import { Student } from "./models/student";
const app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
const changeStream = Locker.watch(); // { fullDocument: "updateLookup" } meegeven als parameter voor het volledige document terug te krijgen

mongoose.connect("mongodb://localhost:27017/smartlocker?replicaSet=rs0").catch((err) => console.log(err));

changeStream.on("change", (change) => {
	console.log(change);
	io.emit("changeData", change);
});

io.on("connection", function(client) {
	console.log("Client " + client.id + " connected...");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;
const router = express.Router();

// // all of our routes are prefixed with /api
// ------------- LOCKER ---------------------------------------
// GET localhost:8080/api/lockers
app.use("/api", router);
router.route("/lockers").get((req: Request, res: Response) => {
	Locker.find().populate("reservation").then((data) => {
		res.json(data);
	});
});
// GET localhost:8080/api/lockers/<id>
router
	.route("/lockers/:id")
	.get((req: Request, res: Response) => {
		const id = req.params.id;
		Locker.findById(id).then((data) => {
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
router
	.route("/students")
	.get((req: Request, res: Response) => {
		Student.find().then((data) => {
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
router
	.route("/students/:id")
	.get((req: Request, res: Response) => {
		const id = req.params.id;
		Student.findById(id).then((data) => {
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
router
	.route("/reservations")
	.get((req: Request, res: Response) => {
		Reservation.find().populate("student").then((data) => {
			res.json(data);
		});
	})
	.post((req: Request, res: Response) => {
		const reservation = req.body;
		Reservation.create(reservation, (err) => {
			if (err) {
				res.send(err);
			} else {
				// const lockerToUpdate = Locker.findById(req.body.locker);
				res.sendStatus(200);
			}
		});
	});
router
	.route("/reservations/:id")
	.get((req: Request, res: Response) => {
		const id = req.params.id;
		Reservation.findById(id).then((data) => {
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

server.listen(port);
console.log("started the server at 127.0.0.1:" + port);
