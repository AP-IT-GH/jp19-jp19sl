import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const LockerSchema = new Schema({
	open: { type: Boolean, required: true },
	reservation: [ { type: Schema.Types.ObjectId, ref: "Reservation" } ],
	isReserved: { type: Boolean, required: true },
	gpio: { type: Number, required: true },
	created_at: { type: Date, default: Date.now, required: true },
	updated_at: { type: Date }
});

export let Locker = mongoose.model("Locker", LockerSchema);
