import styled from "styled-components";


const UserCard = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ImgWrapper = styled.div`
    width: 250px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    overflow: hidden;
`
const UserData = styled.dl`
    flex: 0 1 50%;

    
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