import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 5;
    grid-row: 1 / 2;
    background-color: antiquewhite;
    
    h1 {
        margin: auto;
    }

    img {
        width: 90px;
        height: 90px;
    }
`

export const S = {
    StyledHeader
}