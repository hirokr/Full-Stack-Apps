const mongoose = require('mongoose')

const connections = {isConnected: false}

export const connectDB = async () =>{
  try {
    if (connections.isConnected){
      console.log("Using existing connection")
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);

    console.log(db) // testing purpose 

    connections.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected...");

  } catch (error) {
    // console.log(error)
    throw new Error("MONGO_URI connection error: " + error)
  }
}