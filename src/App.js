import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import styled from "styled-components";

function App() {
  return (
    <FormApp>
      <Form />
      <List />
    </FormApp>
  );
}

const FormApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export default App;
