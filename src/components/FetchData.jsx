import { Database } from "firebase/database";
import { get } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { database } from "../modules/firebaseConfig";
import { ref } from "firebase/database";


export const FetchData = ({ tasks, handleAddName, setName, name }) => {

    return (
        <div id="todoDiv">

            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className={`task-container ${task.category}`}>
                        <p>Assignment: {task.assignment}</p>
                        <p>Category: {task.category}</p>
                        <p>Status: {task.status}</p>
                        <form onSubmit={(event) => {event.preventDefault(); handleAddName(task); }}>
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Your name"/>
                            <button id="nameBtn">Add {">"}{">"}</button>

                        </form>
                    </div>
                ))

            ) : (
                <p>No tasks found</p>
            )}

        </div>
    );

};
