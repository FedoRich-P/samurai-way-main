import React from "react";
import {s} from './Aside.styled'
import styles from'./Aside.module.css'
import {NavLink} from "react-router-dom";

export const Aside = () => {
    return (
        <s.StyledAside>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.item }>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="" className = { navData => navData.isActive ? styles.active : styles.item }>Find users</NavLink>
                    </li>
                </ul>
                <NavLink to="" className = { navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink>
            </nav>
        </s.StyledAside>
    )
}

