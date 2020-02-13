/* ---------------------------------------------------------------------------------
   * @ description : This is the db configration file.
---------------------------------------------------------------------------------- */
const Mongoose = require("mongoose");

module.exports = async () => {
  Mongoose.Promise = global.Promise;
  Mongoose.set("useCreateIndex", true);

  Mongoose.connect(
    "mongodb://localhost:27017/socket_cluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      if (err) {
        console.log("DB Connection: DB Error", err);
      } else {
        console.log("DB Connection: MongoDB Connected");
      }
    }
  );
};
