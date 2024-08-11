import React from "react";
import {S} from './Aside.styled'

export const Aside = () => {
    return (
        <S.StyledAside>
            <nav>
                <ul>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <a href="dialogs">Messages</a>
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
                </ul>
                <a href="#">Settings</a>
            </nav>
        </S.StyledAside>
    )
}

