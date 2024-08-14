import React from "react";
import {s} from "./Post.styled";

export const Post = (props: { text: string, likes: number, id: number }) => {
    return (
        <s.Item>
            <s.Descr>
                <s.ImageWrapper>
                    <img src="" alt="User Photo"/>
                </s.ImageWrapper>
                <h3>{props.text}</h3>

            </s.Descr>
            <div>
                <s.LikesCounter>Likes: {props.likes}</s.LikesCounter>
                <s.Button>Like</s.Button>
            </div>
        </s.Item>

    )
}


