import { TaskForm } from "./TaskForm";
import { TodoCard } from "./StatusCard.jsx";
import { InProgressCard } from "./StatusCard.jsx";
import { DoneCard } from "./StatusCard.jsx";
import "../css/style.css";


export function App() {
    return (
        <div>
            <div id="addTaskDiv">
                <h1 className="titletext">ScrumBoard</h1>
                <TaskForm />
            </div>

            <div id="assignmentDiv">

                <TodoCard />
                <InProgressCard />
                <DoneCard />

            </div>

        </div>




    );
}
