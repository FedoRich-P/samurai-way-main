import React from "react";
import {s} from "./Posts.styled";
import {Post} from "../post/Post.";
import {ProfilePagePropsType} from "../../../redux/state";

export const Posts = ({posts}: ProfilePagePropsType) => {

    return (
        <s.PostsWrapper>
            <s.MainForm>
                <h3>My post</h3>
                <textarea placeholder={"Enter news"}></textarea>
                <s.FormButton>send</s.FormButton>
            </s.MainForm>
            <ul>
                {
                   posts.map(({text, likes, id}, i) => {
                        return (
                            <Post  text={text} likes={likes} id={id} key={i} />

                        )
                    })
                }
            </ul>
        </s.PostsWrapper>
    )
}