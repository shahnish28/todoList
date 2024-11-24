
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

```bash
git clone https://github.com/shahnish28/todoList.git
```

### 2. Navigate into the Project Directory

Move into the project directory:

```bash
cd todoList
```

### 3. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

### 4. Set Up WebSocket Server

To enable real-time functionality, you need a WebSocket server running. If you don't have one already, follow these steps to set up a basic server:

1. In the project root directory, access the file called `server.js`:

   ```bash
   cd backend
   ```

2. Run the WebSocket server:

   ```bash
   node server.js
   ```

### 5. Update WebSocket Connection in React

Ensure the WebSocket connection is correctly set up in your React app. In the `src/socket.js` file, add the following:

```js
import io from "socket.io-client";

// Connect to the WebSocket server
const socket = io("http://localhost:4000");

export default socket;
```

### 6. Start the Application

Once the dependencies are installed and the WebSocket server is set up, start the React application:

```bash
npm start
```

This will launch the app at `http://localhost:3000`. Open it in your browser to start using the Todo List app.

### 7. Access the Todo List

Open multiple browser tabs or different browsers to see the real-time collaborative functionality in action.

## 📂 Project Structure
```
REACT-TODO-APP/
├── backend/
│   └── server.js
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── actions/
│   │   │   └── todoActions.js
│   │   ├── reducers/
│   │   │   ├── index.js
│   │   │   └── todoReducer.js
│   │   ├── actions.js
│   │   └── store.js
│   ├── utils/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── socket.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## 📝 Usage

### Adding a Task

1. Enter the task description in the input field.
2. Click the "Add" button to add the task.

### Editing a Task

1. Click the "Edit" button next to the task you want to update.
2. Edit the task description in the prompt and click "OK."

### Removing a Task

1. Click the "Remove" button next to the task you want to delete.

### Real-time Collaboration

All changes made to the Todo List are reflected in real-time for all users connected to the app.

## 💡 Future Enhancements

- User authentication to allow personalized task lists.
- Integration with a database to persist tasks beyond sessions.
- Task prioritization and categorization.
- Task due dates and reminders.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙋‍♂️ Contact

For any questions, feel free to reach out to:

- **Nish Shah** - [GitHub Profile](https://github.com/shahnish28)

Thank you for checking out this project! Happy coding! 🎉


