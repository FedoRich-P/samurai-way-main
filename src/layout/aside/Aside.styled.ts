import styled from "styled-components";

const StyledAside = styled.aside`
    padding: 20px;
    grid-column: 1 /2;
    grid-row: 2 / -1;
    background-color: #999;
    border-radius: 10px 0 0 10px;
    
    nav {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    
    ul {

        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: end;
        margin-bottom: 30vh;
        
    }

    a {
        padding: 10px;
        font-size: 1.5rem;
        font-weight: 700;
        border-bottom: 1px solid brown;
    }
`

export const s = {
    StyledAside
}