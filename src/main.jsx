import { createRoot } from "react-dom/client";
import { App } from "./components/App.jsx";
import { TaskForm } from "./components/TaskForm.jsx";



const root = createRoot(document.querySelector(`#root`));
root.render(<App/>);



