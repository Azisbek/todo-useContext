import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import { todosContext } from "../todosContext/todoscontext";

const inputReducer = (prevState, actions) => {
  if (actions.type === "TITLE_INPUT") {
    return {
      ...prevState,
      title: actions.payload,
    };
  }
  if (actions.type === "DATE_INPUT") {
    return {
      ...prevState,
      date: actions.payload,
    };
  }
  return prevState;
};

const Form = () => {
  const todoscontext = useContext(todosContext);
  const [stateInput, dispatcher] = useReducer(inputReducer, {
    title: "",
    date: "",
  });

  const inputTitleChangeHandler = (event) => {
    dispatcher({ type: "TITLE_INPUT", payload: event.target.value });
  };
  const inputDateChangeHandler = (event) => {
    dispatcher({ type: "DATE_INPUT", payload: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    todoscontext.addTodo({ id: Math.random().toString(), stateInput });
    console.log(stateInput);
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <input
        value={stateInput.title}
        style={{ width: "300px" }}
        type="text"
        onChange={inputTitleChangeHandler}
      />
      <input
        value={stateInput.date}
        type="date"
        onChange={inputDateChangeHandler}
      />
      <button>ADD</button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  margin-top: 40px;
  background-color: #2f61f7;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #000000;

  & button {
    padding: 10px;
  }
  & input {
    height: 30px;
    border-radius: 10px;
    border: none;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 300;
    font-size: 17px;
  }
`;

export default Form;
