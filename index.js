const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running.");
});

// this will be run every time someone connects to our website
io.on("connection", (socket) => {
  // set events to listen to from that socket that we conected from

  // we are sending the socket id through the 'me' event to the front end
  socket.emit("me", socket.id);

  // In the front end we will have 3 refs for these 3 events
  // connectionRef, myVideo and userVideo

  // disconnect event
  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  // calluser event
  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  // answercall event
  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
