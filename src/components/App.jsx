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
import { remove } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { set } from "firebase/database";

// Initializes the application component
// Fetches tasks from the database when the component mounts
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

    // This asynchronous function adds a new task to the database, sets status to 'To do'
    const addTask = async (task) => {

        try {

            console.log('Task to be added', task)
            const newTaskRef = push(ref(database, 'Assignment'));

            console.log('new task ref', newTaskRef)
            await set(newTaskRef, task);

            setTasks(prevTasks => [...prevTasks, { ...task, id: newTaskRef.key }]);
            console.log('task added successfully')

        } catch (error) {
            console.error('Error adding task:', error)
            alert('There was an error adding task');

        }
    };

    //This asynchronous function updates the task, sets status to 'In Progress'
    const updateTask = async (updatedTask) => {

        try {

            const taskRef = ref(database, `Assignment/${updatedTask.id}`);
            await update(taskRef, updatedTask);
            setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
            console.log('task updated successfully');

        } catch (error) {
            console.error('Error updating task:', error)
            alert('There was an error updating task');
        }
    };

    //asynchronous function that marks task as done, sets status to 'Done'
    const markTaskAsDone = async (task) => {
        try {
            const updatedTask = { ...task, status: 'Done' };
            await updateTask(updatedTask);

        } catch (error) {

            console.error('Error marking task as done');
            alert('There was an error marking task as done');
        }
    };

    //Function that removes task from database
    const removeTask = async (task) => {
        try {
            const taskRef = ref(database, `Assignment/${task.id}`);
            await remove(taskRef);
            setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));

        } catch (error) {
            console.error('Error removing task: ', error);
            alert('There was an error removing task');
        }
    }

    // Renders the main application components, including task forms and status cards
    return (
        <div>
            <div id="addTaskDiv">
                <h1 className="titletext">Scrum Board</h1>
                <TaskForm addTask={addTask} />
            </div>

            <div id="assignmentDiv">
                <TodoCard tasks={tasks.filter(task => task.status === 'To Do')} updateTask={updateTask} />
                <InProgressCard tasks={tasks.filter(task => task.status === 'In Progress')} markTaskAsDone={markTaskAsDone} />
                <DoneCard tasks={tasks.filter(task => task.status === 'Done')} removeTask={removeTask} />

            </div>
        </div>
    );
}
