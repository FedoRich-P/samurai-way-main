import {s} from "./Message.styled";
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    text: string;
}

export const Message = ({text} : MessagePropsType) => {
    return(
        <s.StyledMessage>
            {text}
        </s.StyledMessage>
    )
}