import React from "react";
import {s} from "./Profile.styled";
import {Posts} from "./myPosts/Posts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import { ProfilePagePropsType} from "../../redux/state";

export const Profile = ({posts}: ProfilePagePropsType) => {
    return (
        <s.StyledProfile>
            <ProfileInfo/>
            <Posts posts={posts}/>
        </s.StyledProfile>
    )
}
