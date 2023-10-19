import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodosContext from "./components/todosContext/todoscontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosContext>
    <App />
  </TodosContext>
);
