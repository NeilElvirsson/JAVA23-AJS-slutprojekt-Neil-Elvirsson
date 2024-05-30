import { useState } from "react";

//Layout for the webbpage(static version)
// This function is for displaying and fetching our tasks, it updates the task and handles the name fields.
export function TodoCard({ tasks = [], updateTask }) {

    const [nameInputs, setNameInputs] = useState({});

    const handleAddName = (task) => {
        const updatedTask = { ...task, status: 'In Progress', name: nameInputs[task.id] || '' };
        updateTask(updatedTask);
        setNameInputs(prev => ({ ...prev, [task.id]: '' }));
    };
    const handleInputChange = (taskId, value) => {
        setNameInputs(prev => ({ ...prev, [taskId]: value }));
    };

// Renders "To do" tasks with assignment form
// This function updates task status to "In Progress" on form submit and handles name input change

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
                            <input type="text" value={nameInputs[task.id] || ''} onChange={(event) => handleInputChange(task.id, event.target.value)} placeholder="Enter your name" required />
                            <button id="nameBtn">Assign {">"}{">"}</button>
                        </form>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>
            )}
        </div>
    );
}

// This function renders "In Progress" tasks and Marks task as "Done" on button click

export function InProgressCard({ tasks = [], markTaskAsDone }) {
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

                        <button id="doneBtn" onClick={() => { markTaskAsDone(task); }}>Done {">"}{">"}</button>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>
            )}
        </div>
    );
}
//function thats renders done tasks, remove task from list and database on button click
export function DoneCard({ tasks = [], removeTask }) {

    console.log("RemoveTask in DoneCard", removeTask);
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

                        <button id="deleteBtn" onClick={() => removeTask(task)}>Delete {">"}{">"}</button>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>

            )}



        </div>
    );
}






