import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle= createGlobalStyle`
 body {
   background: #778899;
 }
`;

function App() {
  return (
    <TodoProvider>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoItem />
      <TodoCreate />
    </TodoTemplate>
    </TodoProvider>
  );
}

export default App;