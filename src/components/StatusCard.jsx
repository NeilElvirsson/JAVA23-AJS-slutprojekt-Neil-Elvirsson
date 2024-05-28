import { TodoTask } from "./FetchData";
import { useEffect } from "react";
import { useState } from "react";
import { Database } from "firebase/database";
import { ref } from "firebase/database";
import { get } from "firebase/database";

export function TodoCard({ tasks = [], updateTask }) {

    const [name, setName] = useState('');

    const handleAddName = (task) => {
        const updatedTask = { ...task, status: 'In Progress', name: name };
        updateTask(updatedTask);
        setName('');
    };


    return (
        <div id="todoDiv">
            <h2>To do</h2>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className={`task-container ${task.category}`}>
                        <p>Assignment: {task.assignment}</p>
                        <p>Category: {task.category}</p>
                        <p>Status: {task.status}</p>
                        <form onSubmit={(event) => { event.preventDefault(); handleAddName(task); }}>
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                            <button id="nameBtn">Add {">"}{">"}</button>
                        </form>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>
            )}
        </div>
    );
}

export function InProgressCard({ tasks = [] }) {
    return (
        <div id="inProgressDiv">
            <h2>In Progress</h2>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className={`task-container ${task.category}`}>
                        <p>Assignment: {task.assignment}</p>
                        <p>Category: {task.category}</p>
                        <p>Status: {task.status}</p>
                        <p>Assigned to: {task.name}</p>

                        <button id="doneBtn">Done {">"}{">"}</button>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>
            )}
        </div>
    );
}

export function DoneCard({ tasks = [] }) {
    return (
        <div id="doneDiv">
            <h2>Done</h2>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
            <div key={index} className={`task-container ${task.category}`}>
                <p>Assignment: {task.assignment}</p>
                <p>Category: {task.category}</p>
                <p>Status: {task.status}</p>
                <p>Completed by: {task.name}</p>

            </div>
            ))
            ) : (
            <p>No tasks found</p>

        )}

            <button id="deleteBtn">Delete {">"}{">"}</button>

        </div>
    );
}






