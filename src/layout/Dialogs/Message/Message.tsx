import {s} from "./Message.styled";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id?: number;
    text: string;
}

export const Message = ({text, id} : DialogItemPropsType) => {
    return(
        <s.StyledMessage>
            {text}
        </s.StyledMessage>
    )
}