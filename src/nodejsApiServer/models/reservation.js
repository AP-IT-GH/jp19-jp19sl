var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ReservationSchema = new Schema({
    student : [{type: Schema.Types.ObjectId, ref : 'Student', required : true}],
    startDate : {type : Date, required : true},
    endDate : {type : Date, required : true},
    created_at: {type : Date, default : Date.now, required : true},
    updated_at: Date
  });

let Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;