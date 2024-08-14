import React from "react";
import {s} from "./Posts.styled";
import {Post} from "../post/Post.";

export type PostsArrPropsType = {
    id: number;
    text: string;
    likes: number;
}

export type StatePropsType = {
    postsArr: PostsArrPropsType[];
}

export type PostsPropsType = {
    state: StatePropsType;
}

export const Posts = (props: PostsPropsType) => {
    return (
        <s.PostsWrapper>
            <s.MainForm>
                <h3>My post</h3>
                <textarea placeholder={"Enter news"}></textarea>
                <s.FormButton>send</s.FormButton>
            </s.MainForm>
            <ul>
                {
                    props.state.postsArr.map(({text, likes, id}, i) => {
                        return (
                            <Post text={text} likes={likes} id={id} key={i}/>

                        )
                    })
                }
            </ul>
        </s.PostsWrapper>
    )
}