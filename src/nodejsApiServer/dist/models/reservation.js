"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
    student: [{ type: Schema.Types.ObjectId, ref: "Student", required: true }],
    locker: { type: Schema.Types.ObjectId, ref: "Locker", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: Date
});
exports.Reservation = mongoose.model("Reservation", ReservationSchema);
//# sourceMappingURL=reservation.js.map