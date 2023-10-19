import { createContext, useState } from "react";

export const todosContext = createContext();

const TodosContext = ({ children }) => {
  const [data, setData] = useState([]);
  const addTodo = (newData) => {
    setData((prevData) => {
      return [newData, ...prevData];
    });
  };

  return (
    <todosContext.Provider value={{ data, addTodo }}>
      {children}
    </todosContext.Provider>
  );
};

export default TodosContext;
