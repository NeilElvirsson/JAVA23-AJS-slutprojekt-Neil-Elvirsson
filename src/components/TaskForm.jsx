import { Database } from "firebase/database";
import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { database } from "../modules/firebaseConfig";
import { set } from "firebase/database";

export function TaskForm({addTask}) {

    const [assignment, setAssignment] = useState('');
    const [category, setCategory] = useState('ux');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           const newTask = {

            assignment: assignment,
            category: category,
            status:'To Do',
            name: '',
            
        };

        console.log('Adding task:', newTask);
        await addTask(newTask); 

        setAssignment('');
        setCategory('ux');

        console.log(assignment);
        } catch (error) {

            console.log('Error adding task:', error)
        }
    };
    return (
        <div id="formDiv">
            <form onSubmit={handleSubmit}>
                <input type="text" value={assignment} onChange={(event) => setAssignment(event.target.value)}
                    placeholder="Enter a new task" />

                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="ux">UX</option>
                    <option value="backend">Backend dev</option>
                    <option value="frontend">Frontend dev</option>
                </select>

                <button id="addTaskBtn">Add {">"}{">"}</button>

            </form>

            <div id="taskColorDiv">
                <h3 className="ux">UX</h3>
                <h3 className="backend">Backend dev</h3>
                <h3 className="frontend">Frontend dev</h3>
            </div>
           
        </div>
    );
}



