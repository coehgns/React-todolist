import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

const GlobalStyle= createGlobalStyle`
 body {
   background: #778899;
 }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoItem />
    </TodoTemplate>
    </>
  );
}

export default App;