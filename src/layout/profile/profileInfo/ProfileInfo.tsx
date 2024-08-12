import React from "react";

import {s} from "./ProfileInfo.styled";
import {Posts} from "../myPosts/Posts";

export const ProfileInfo = (props:{text?: string, likes?:number}) => {
    return (
        <>
                <s.UserCard>
                    <s.ImgWrapper>
                        <img
                            src="https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg"
                            alt=""/>
                    </s.ImgWrapper>
                    <s.UserData>
                        <div>
                            <dt>Name</dt>
                            <dd>Dmitriy</dd>
                        </div>
                        <div>
                            <dt>Birth Date</dt>
                            <dd>06.03.1990</dd>
                        </div>
                        <div>
                            <dt>City</dt>
                            <dd>Msk</dd>
                        </div>
                        <div>
                            <dt>Education</dt>
                            <dd>PGY</dd>
                        </div>
                        <div>
                            <dt>Web Side</dt>
                            <dd>...</dd>
                        </div>
                    </s.UserData>
                </s.UserCard>

        </>
    )
}