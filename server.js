const express = require("express");
const app = express();
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

const PORT = 3000;

// public folder serve பண்ணுறது
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("✅ New user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

http.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
