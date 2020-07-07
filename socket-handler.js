const socketsModel = require("./sockets.model");
const { sendMessage } = require("./notifications");
module.exports = io => {
  io.on("connection", async socket => {
    await socketsModel.create({
      socket_id: socket.id
    });
    let sockets = await socketsModel.find({});
    console.log("Connected Sockets", sockets);

    socket.on("disconnect", async () => {
      console.log("user disconnected for socket " + socket.id);
      await socketsModel.deleteOne({ socket_id: socket.id });
      let sockets = await socketsModel.find({});
      console.log("Connected Sockets", sockets);
    });

    socket.on("chat message", async msg => {
      console.log("A message was sent to server", msg);
      sendMessage(msg);
    });
  });
};
