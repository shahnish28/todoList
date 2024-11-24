# Todo List App

This is a **real-time collaborative Todo List application** built with React, Redux, WebSockets, and CSS. It allows multiple users to add, edit, and remove tasks, with all changes synchronized in real-time.

## 🚀 Features

- **Add tasks**: Easily add new tasks to the shared list.
- **Edit tasks**: Update existing tasks.
- **Remove tasks**: Delete tasks you no longer need.
- **Real-time collaboration**: Changes made by one user are reflected for all users in real-time.

## 🛠️ Technologies Used

- **React** - Frontend UI framework
- **Redux** - State management
- **Redux Thunk** - Middleware for async actions
- **WebSockets** - Real-time communication
- **CSS** - Styling the interface

## 📜 Setup Instructions

### Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

First, clone the repository to your local machine:

###bash
git clone https://github.com/shahnish28/todoList.git

2. **Navigate into the Project Directory**
Move into the project directory:

### bash
### Copy code

cd todoList

3. **Install Dependencies**
Install all required dependencies using npm:

### bash
### Copy code

npm install

4. **Set Up WebSocket Server**
To enable real-time functionality, you need a WebSocket server running. If you don't have one already, follow these steps to set up a basic server:

In the project root directory, create a new file called server.js:

### js
### Copy code

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Listen for WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Send initial todos when a new user connects
  socket.emit("initialTodos", []);

  // Listen for 'addTodo' event
  socket.on("addTodo", (todo) => {
    io.emit("todoAdded", todo);
  });

  // Listen for 'removeTodo' event
  socket.on("removeTodo", (id) => {
    io.emit("todoRemoved", id);
  });

  // Listen for 'updateTodo' event
  socket.on("updateTodo", (todo) => {
    io.emit("todoUpdated", todo);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
Run the WebSocket server:

### bash
### Copy code

node server.js

5. **Update WebSocket Connection in React**
Ensure the WebSocket connection is correctly set up in your React app. In the src/socket.js file, add the following:

### js
### Copy code

import io from "socket.io-client";

// Connect to the WebSocket server
const socket = io("http://localhost:5000");

export default socket;

6. **Start the Application**
Once the dependencies are installed and the WebSocket server is set up, start the React application:

### bash
### Copy code

npm start

This will launch the app at http://localhost:3000. Open it in your browser to start using the Todo List app.

7. **Access the Todo List**
Open multiple browser tabs or different browsers to see the real-time collaborative functionality in action.

📂 Project Structure
perl
Copy code
todoList/
├── public/              # Public assets
├── src/
│   ├── components/      # React components
│   ├── redux/           # Redux store, actions, and reducers
│   ├── App.js           # Main React component
│   ├── index.js         # Entry point for React app
│   ├── socket.js        # WebSocket connection setup
│   └── styles.css       # CSS styling
├── server.js            # WebSocket server (if applicable)
├── .gitignore           # Git ignore file
├── README.md            # Project documentation
├── package.json         # npm dependencies and scripts
└── package-lock.json    # Version-locked dependency tree

📝 Usage
Adding a Task
Enter the task description in the input field.
Click the "Add" button to add the task.
Editing a Task
Click the "Edit" button next to the task you want to update.
Edit the task description in the prompt and click "OK."
Removing a Task
Click the "Remove" button next to the task you want to delete.
Real-time Collaboration
All changes made to the Todo List are reflected in real-time for all users connected to the app.

💡 Future Enhancements
User authentication to allow personalized task lists.
Integration with a database to persist tasks beyond sessions.
Task prioritization and categorization.
Task due dates and reminders.

🤝 Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

📜 License
This project is licensed under the MIT License. See the LICENSE file for more details.

🙋‍♂️ Contact
For any questions, feel free to reach out to:

Nish Shah - GitHub Profile

---------------------------------------------------------------------------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
