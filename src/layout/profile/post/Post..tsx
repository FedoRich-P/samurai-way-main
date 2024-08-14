import React from "react";
import {s} from "./Post.styled";
import {PostsArrPropsType} from "../../../redux/state";

export const Post = ({id, text, likes}: PostsArrPropsType) => {
    return (
        <s.Item key={id}>
            <s.Descr>
                <s.ImageWrapper>
                    <img src="" alt="User Photo"/>
                </s.ImageWrapper>
                <h3>{text}</h3>

            </s.Descr>
            <div>
                <s.LikesCounter>Likes: {likes}</s.LikesCounter>
                <s.Button>Like</s.Button>
            </div>
        </s.Item>

    )
}


