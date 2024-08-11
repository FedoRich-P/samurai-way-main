import React from "react";
import {S} from "./Post.styled";

export const Post = (props:{text?: string, likes?:number}) => {
    return (
        <S.Item>
            <S.Descr>
                <h3>{props.text}</h3>
                <S.ImageWrapper>
                    <img src="" alt="User Photo"/>
                </S.ImageWrapper>
            </S.Descr>
            <S.Button>Like</S.Button>
            <S.LikesCounter>Likes: {props.likes}</S.LikesCounter>
        </S.Item>
    )
}