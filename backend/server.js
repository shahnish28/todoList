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

// In-memory storage for todos and activity log
let todos = [];
let activityLog = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send initial todos and activity log to the client
  socket.emit("initialTodos", todos);
  socket.emit("initialActivityLog", activityLog);

  // Helper function to add an entry to the activity log
  const addLogEntry = (message) => {
    const logEntry = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    activityLog.push(logEntry);
    io.emit("activityLogUpdated", logEntry); // Broadcast new log entry
  };

  // Handle adding a new todo
  socket.on("addTodo", (todo) => {
    todos.push(todo);
    io.emit("todoAdded", todo);
    addLogEntry(`Task added: "${todo.text}"`);
  });

  // Handle removing a todo
  socket.on("removeTodo", (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    io.emit("todoRemoved", id);
    addLogEntry(`Task removed with ID: ${id}`);
  });

  // Handle updating a todo
  socket.on("updateTodo", (updatedTodo) => {
    todos = todos.map((todo) =>
      todo.id === updatedTodo.id ? { ...todo, text: updatedTodo.text } : todo
    );
    io.emit("todoUpdated", updatedTodo);
    addLogEntry(`Task updated to: "${updatedTodo.text}"`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(4000, () => {
  console.log("WebSocket server is running on http://localhost:4000");
});
