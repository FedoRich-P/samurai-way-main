import React from "react";
import {S} from './Main.styled'
import {Posts} from "../../profile/myPosts/posts/Posts";

export const Main = () => {
    return (
        <S.StyledMain>
            <S.UserCard>
                <S.ImgWrapper>
                    <img
                        src="https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg"
                        alt=""/>
                </S.ImgWrapper>
                <S.UserData>
                    <dl>
                        <dt>Name</dt>
                        <dd>Dmitriy</dd>
                    </dl>
                    <dl>
                        <dt>Birth Date</dt>
                        <dd>06.03.1990</dd>
                    </dl>
                    <dl>
                        <dt>City</dt>
                        <dd>Msk</dd>
                    </dl>
                    <dl>
                        <dt>Education</dt>
                        <dd>PGY</dd>
                    </dl>
                    <dl>
                        <dt>Web Side</dt>
                        <dd>...</dd>
                    </dl>
                </S.UserData>
            </S.UserCard>
            <Posts/>
        </S.StyledMain>
    )
}


