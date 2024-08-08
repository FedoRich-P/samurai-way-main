import logoPath from "../images/i.webp";
import React from "react";
import styled from "styled-components";

export const Aside = () => {
    return (
        <StyledAside>
            <nav>
                <ul>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                    <li>
                        <a href="#">Find users</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
        </StyledAside>
    )
}

const StyledAside = styled.aside`
    padding: 20px;
    grid-column: 1 /2;
    grid-row: 2 / -1;
    background-color: #999;
    
    ul {

        display: flex;
        flex-direction: column;
        gap: 20px;
        
        a {
            font-size: 2rem;
            font-weight: 700;
        }
    }
`