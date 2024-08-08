
import logoPath from "../images/i.webp";
import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <img
                src={logoPath}
                alt="logo"/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    grid-column: 1 / 5;
    grid-row: 1 / 2;
    background-color: antiquewhite;

    img {
        width: 90px;
        height: 90px;
    }
`