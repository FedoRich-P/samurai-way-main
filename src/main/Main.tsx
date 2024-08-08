import logoPath from "../images/i.webp";
import React from "react";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <UserCard>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_AU.svg/1200px-Logo_AU.svg.png"
                     alt=""/>
                <UserData>
                    <UserName>Dmitry</UserName>
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
                </UserData>
            </UserCard>
            <MainForm>
                <h3>My post</h3>
                <textarea placeholder={"Enter news"}></textarea>
                <FormButton>send</FormButton>
            </MainForm>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    grid-column: 2 / -1;
    grid-row: 2 / -1;
    background-color: darkcyan;
`

const UserCard = styled.article`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    img {
        width: 100px;
        height: 100px;
    }
`
const UserData = styled.div`
    padding: 20px;
    flex: 0 1 500px;
    border: 2px solid brown;
    border-radius: 10px;
    
    dl {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
    
    dt {
        font-size: 1.5rem;
        font-weight: 500;
    }
`

const UserName = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 15px;
`

const MainForm = styled.form`
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;

    textarea {
        padding: 15px;
        height: 150px;
        border-radius: 10px;
        resize: none;
    }
`
const FormButton = styled.button`
    padding: 8px 25px;
    font-size: 1.2rem;
    background-color: brown;
    border-radius: 10px;
`
