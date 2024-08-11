import React from "react";
import {S} from "./Posts.styled";
import {Post} from "../post/Post";

export const Posts = () => {
    return (
        <S.PostsWrapper>
            <S.MainForm>
                <h3>My post</h3>
                <textarea placeholder={"Enter news"}></textarea>
                <S.FormButton>send</S.FormButton>
            </S.MainForm>
            <ul>
                <Post text="First comment" likes={20}/>
                <Post text="Second  comment" likes={50}/>
            </ul>
        </S.PostsWrapper>
    )
}