import React from "react";
import {s} from "./Post.styled";

export const Post = (props: { text?: string, likes?: number }) => {
    return (
        <s.Item>
            <s.Descr>
                <h3>{props.text}</h3>
                <s.ImageWrapper>
                    <img src="" alt="User Photo"/>
                </s.ImageWrapper>
            </s.Descr>
            <s.Button>Like</s.Button>
            <s.LikesCounter>Likes: {props.likes}</s.LikesCounter>
        </s.Item>

    )
}


