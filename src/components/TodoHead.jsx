import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-right:32px;
    padding-left:32px;
    padding-bottom:24px;
    border-bottom: 1px solid #e9ecef;
    
    h1{
        font-size: 36px;
        margin: 0;
        color:balck;
    }
    
    .day {
        font-size: 19px;
        color:grey;
        margin-top: 4px;
    }
    
    .task{
        font-size:16px;
        color:green;
        font-weight: bold;
        margin-top:40px;
    }`

    function TodoHead() {
        const todos = useTodoState();
        const undoneTasks = todos.filter(todo => !todo.done);

        const today = new Date();
        const dateString = today.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'

        });
        const dayName = today.toLocaleDateString('ko-KR' , { weekday: 'long'});

        return (
            <TodoHeadBlock>
                <h1>{dateString}</h1>
                <div className="day">{dayName}</div>
                <div className="task">할 일 {undoneTasks.length}개 남음</div>
            </TodoHeadBlock>
        );
    }

    export default TodoHead;

    