import React from "react";
import {s} from "./Profile.styled";
import {Posts, PostsPropsType} from "./myPosts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = ({state}: PostsPropsType) => {
    return (
        <s.StyledProfile>
            <ProfileInfo/>
            <Posts state={state}/>
        </s.StyledProfile>
    )
}