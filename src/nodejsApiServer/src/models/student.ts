import * as mongoose from "mongoose";
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
    unique : true,
    required: true
  },
  group: {
    type: String,
    required: false,
    trim: true
  },
  created_at: {type : Date, default : Date.now, required : true},
  updated_at: Date
});

export let Student = mongoose.model("Student", StudentSchema);
