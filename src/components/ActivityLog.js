import React, { useState, useEffect } from "react";
import socket from "../socket";
import "./ActivityLog.css";

const ActivityLog = () => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    // Receive the initial activity log from the server
    socket.on("initialActivityLog", (initialLog) => {
      setLog(initialLog);
    });

    // Listen for updates to the activity log from the server
    socket.on("activityLogUpdated", (newLogEntry) => {
      setLog((prevLog) => [...prevLog, newLogEntry]);
    });

    // Clean up WebSocket listeners on component unmount
    return () => {
      socket.off("initialActivityLog");
      socket.off("activityLogUpdated");
    };
  }, []);

  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      <ul>
        {log.map((entry) => (
          <li key={entry.id}>
            <span className="timestamp">[{entry.timestamp}]</span>{" "}
            {entry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
