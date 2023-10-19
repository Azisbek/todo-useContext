import React, { useContext } from "react";
import { todosContext } from "../todosContext/todoscontext";
import styled from "styled-components";

const List = () => {
  const todoscontext = useContext(todosContext);
  return (
    <Ullist>
      {todoscontext.data.map((el) => {
        return (
          <li key={Math.random.toString()}>
            <p style={{ fontSize: "28px" }}>{el.stateInput.title}</p>
            <p>{el.stateInput.date}</p>
          </li>
        );
      })}
    </Ullist>
  );
};

const Ullist = styled.ul`
  margin-top: 25px;
  list-style: none;
  & li {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 25px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 300;
    background-color: #ffffff;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px black;
    border: none;
  }
`;
export default List;
