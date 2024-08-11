import React from "react";
import {S} from "./Header.styled"

export const Header = () => {
    return (
        <S.StyledHeader>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_AU.svg/1200px-Logo_AU.svg.png"
                alt="logo"/>

            <h1>Socials</h1>
        </S.StyledHeader>
    )
}

