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
const LockerSchema = new Schema({
    open: { type: Boolean, required: true },
    reservation: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
    isReserved: { type: Boolean, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date }
});
exports.Locker = mongoose.model("Locker", LockerSchema);
//# sourceMappingURL=locker.js.map