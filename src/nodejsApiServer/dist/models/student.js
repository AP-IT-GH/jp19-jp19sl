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
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    student_number: {
        type: Number,
        dropDups: true,
        unique: true,
        required: true
    },
    group: {
        type: String,
        required: false,
        trim: true
    },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: Date
});
exports.Student = mongoose.model("Student", StudentSchema);
//# sourceMappingURL=student.js.map