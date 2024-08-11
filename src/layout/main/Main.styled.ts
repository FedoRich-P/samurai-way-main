import styled from "styled-components";

const StyledMain = styled.section`
  
`
const UserCard = styled.article`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: start;

    width: 100%;
`
const ImgWrapper = styled.div`
    width: 150px;
    //height: 100px;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;

    img {
        object-fit: contain;
        object-position: top;
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

export const S = {
    StyledMain,
    UserCard,
    ImgWrapper,
    UserData,
}