import styled from "styled-components";

const StyledDialog = styled.section`
    grid-column: 2 / -1;
    grid-row: 2 / -1;
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-template-rows: repeat(2, minmax(50px, max-content));
    background-color: darkcyan;
    border-radius: 0 10px 10px 0;
    
    h2 {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
    }

`

const DialogList = styled.ul`
    grid-column: 1/ 2;
    grid-row: 2/ -1;
`

const MessagesList = styled.ul`
    grid-column: 2/ 3;
    grid-row: 2/ -1;`
const Message = styled.li``


export const s = {
    StyledDialog,
    DialogList,
    MessagesList,
    Message
}