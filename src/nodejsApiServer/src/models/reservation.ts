import * as mongoose from "mongoose";
const Schema       = mongoose.Schema;

const ReservationSchema = new Schema({
    student : [{type: Schema.Types.ObjectId, ref : "Student", required : true}],
    locker : {type: Schema.Types.ObjectId, ref: "Locker", required : true},
    startDate : {type : Date, required : true},
    endDate : {type : Date, required : true},
    created_at: {type : Date, default : Date.now, required : true},
    updated_at: Date
  });

export let Reservation = mongoose.model("Reservation", ReservationSchema);
