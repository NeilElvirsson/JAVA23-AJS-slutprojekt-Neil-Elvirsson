import { TaskForm } from "./TaskForm";
import { TodoCard } from "./StatusCard";
import { InProgressCard } from "./StatusCard";
import { DoneCard } from "./StatusCard";
import { database } from "../modules/firebaseConfig";
import { ref } from "firebase/database";
import { get } from "firebase/database";
import { push } from "firebase/database";
import { update } from "firebase/database";
import "../css/style.css";
import TodoTask from "./FetchData";
import { useEffect } from "react";
import { useState } from "react";
import { set } from "firebase/database";
import { StatusCardFetch } from "./StatusCard";
import { FetchData } from "./FetchData";



export function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log('Fetched tasks MF!: ', tasks)
        const fetchTasks = async () => {
            const tasksRef = ref(database, 'Assignment');
            try {
                const snapshot = await get(tasksRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const fetchedTasks = Object.entries(data).map(([id, task]) => ({ id, ...task }));
                    
                    console.log(fetchedTasks);

                    setTasks(fetchedTasks);
                } else {
                    console.log('No tasks found');
                }
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, []);



    const addTask = async (task) => {

        try {
            console.log('Database ref:', database)
            const db = database;

            console.log('Task to be added', task)
            const newTaskRef = push(ref(db, 'Assignment'));

            console.log('new task ref', newTaskRef)
            await set(newTaskRef, task);

            console.log('task added successfully')
            setTasks([...tasks, { ...task, id: newTaskRef.key }]);

        } catch (error) {
            console.error('Error adding task mah boy:', error)

        }
    };

    const updateTask = async (updatedTask) => {

        try {
            const db = database;
            const taskRef = ref(db, `Assignment/${updatedTask.id}`);
            await update(taskRef, updatedTask);
            setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        } catch (error) {
            console.error('Error updating task:', error)
        }
    };


    return (
        <div>
            <div id="addTaskDiv">
                <h1 className="titletext">ScrumBoard</h1>
                <TaskForm addTask={addTask} />

            </div>


            <div id="assignmentDiv">
                <TodoCard tasks={tasks.filter(task => task.status === 'To Do')} />
                <InProgressCard tasks={tasks.filter(task => task.status === 'In Progress')} />
                <DoneCard tasks={tasks.filter(task => task.status === 'Done')} />

            </div>

        </div>




    );
}
