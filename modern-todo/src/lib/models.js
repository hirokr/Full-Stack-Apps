import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
  },
  password: { 
    type: String, 
    required: true 
  },
  email: {
    type: String, 
    required: true, 
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i,
  },

  tasks: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Task" 
  }],

},{timestamps:true});

const taskSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String 
    },
    completed: { 
      type: Boolean, 
      default: false 
    },
    dueDate: { 
      type: Date 
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" 
    },
  },{timestamps:true}
);

export const USER = mongoose.models.USER || mongoose.model("USER", userSchema)
export const TASKS = mongoose.models.USER || mongoose.model("TASKS", taskSchema)