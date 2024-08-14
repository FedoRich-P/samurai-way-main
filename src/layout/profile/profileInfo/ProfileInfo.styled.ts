import styled from "styled-components";


const UserCard = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ImgWrapper = styled.div`
    margin-right: 15px;
    width: 250px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    overflow: hidden;
`
const UserData = styled.dl`
    margin-bottom: 20px;
    padding: 10px;
    flex: 0 1 50%;
    border: 2px solid brown;
    border-radius: 10px;

    
    div {
        margin-bottom: 15px;
        display: flex;justify-content: space-between;
    
        dt {
            font-weight: 500;
        }

        dt:after {
            content: " : ";
        }
    }
`

export const s = {
    UserCard,
    ImgWrapper,
    UserData,
}