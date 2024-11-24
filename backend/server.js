const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Your frontend URL
    methods: ["GET", "POST"],
  },
});

// In-memory storage for todos
let todos = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send initial todos to the client
  socket.emit("initialTodos", todos);

  // Handle adding a new todo
  socket.on("addTodo", (todo) => {
    todos.push(todo);
    io.emit("todoAdded", todo);
  });

  // Handle removing a todo
  socket.on("removeTodo", (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    io.emit("todoRemoved", id);
  });

  // Handle updating a todo
  socket.on("updateTodo", (updatedTodo) => {
    todos = todos.map((todo) =>
      todo.id === updatedTodo.id ? { ...todo, text: updatedTodo.text } : todo
    );
    io.emit("todoUpdated", updatedTodo);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(4000, () => {
  console.log("WebSocket server is running on http://localhost:4000");
});
