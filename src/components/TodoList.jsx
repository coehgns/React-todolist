import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 30px;
    padding-bottom: 50px;
    overflow-y: auto;
`;

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text="" done={true} />
            <TodoItem text="" done={true} />
            <TodoItem text="" done={true} />
            <TodoItem text="" done={true} />
        </TodoListBlock>
        
    );
}

export default TodoList;