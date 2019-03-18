var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LockerSchema = new Schema({
    open: {type : Boolean, required : true},
    reservation: [{type : Schema.Types.ObjectId, ref: 'Reservation'}],
    isReserved: {type : Boolean, required : true},
    created_at: {type : Date, default : Date.now, required : true},
    updated_at: {type : Date}
  });

let Locker = mongoose.model('Locker', LockerSchema);
module.exports = Locker;