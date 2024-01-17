import React from "react";
import styled from "styled-components";

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
        return (
            <TodoHeadBlock>
                <h1>2024-01-17</h1>
                <div className="day">수요일</div>
                <div className="task">할 일 2개 남음</div>
            </TodoHeadBlock>
        );
    }

    export default TodoHead;

    