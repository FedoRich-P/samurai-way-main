import React from "react";
import {s} from "./Posts.styled";
import {Post} from "../post/Post.";

export const Posts = () => {
    return (
        <s.PostsWrapper>
            <s.MainForm>
                <h3>My post</h3>
                <textarea placeholder={"Enter news"}></textarea>
                <s.FormButton>send</s.FormButton>
            </s.MainForm>
            <ul>
                <Post text="First comment" likes={20}/>
                <Post text="Second  comment" likes={50}/>
            </ul>
        </s.PostsWrapper>
    )
}