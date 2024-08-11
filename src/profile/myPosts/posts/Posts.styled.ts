import styled from "styled-components";

const PostsWrapper = styled.article`
    padding: 20px;
    max-width: 500px;
`

const MainForm = styled.form`
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    textarea {
        padding: 15px;
        height: 150px;
        border-radius: 10px;
        resize: none;
    }
`
const FormButton = styled.button`
    padding: 6px 35px;
    align-self: flex-end;
    font-size: 1rem;
    font-weight: 700;
    background-color: darkgreen;
    border-radius: 10px;
    text-transform: uppercase;
`

export const S = {
    PostsWrapper,
    MainForm,
    FormButton,
}