const socketsModel = require("./sockets.model");

const Notification = {
  sendMessage: async msg => {
    let sockets = await socketsModel.find({});
    sockets = sockets.map(socket_doc => socket_doc.socket_id);
    sockets.forEach(socket_id => global.io.to(socket_id).emit("chat message", msg));
  }
};

module.exports = Notification;