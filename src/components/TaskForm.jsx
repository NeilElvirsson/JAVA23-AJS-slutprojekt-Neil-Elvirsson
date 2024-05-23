import { Database } from "firebase/database";
import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { database } from "../modules/firebaseConfig";

export function TaskForm() {

    const [assignment, setAssignment] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const db = database;

            await push(ref(db, 'Assignment'), {
                assignment: assignment,
                category: category,
                status: 'To do',
            });

            setAssignment('');
            setCategory('');
            console.log(assignment);
        } catch (error) {

            console.log('Error adding task:', error)
        }
    };
    return (
        <div id="formDiv">
            <form onSubmit={handleSubmit}>
                <input type="text" value={assignment} onChange={(e) => setAssignment(e.target.value)}
                    placeholder="Enter a new task" />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="UX">UX</option>
                    <option value="Backend">Backend dev</option>
                    <option value="Frontend">Frontend dev</option>
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



