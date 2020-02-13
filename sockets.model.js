/* -----------------------------------------------------------------------
   * @ description : This file defines the contact admin schema for mongodb.
----------------------------------------------------------------------- */
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const socketSchema = new Schema({
  socket_id: { type: String, default: "" }
});

module.exports = Mongoose.model("sockets", socketSchema);
