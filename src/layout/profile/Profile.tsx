import React from "react";
import {s} from "./Profile.styled";
import {Posts} from "./myPosts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <s.StyledProfile>
            <ProfileInfo/>
            <Posts/>
        </s.StyledProfile>

    )
}