import {s} from "./DialogItem.styled";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number;
    name: string;
}

export const DialogItem = ({name, id} : DialogItemPropsType) => {
    return(
        <s.DialogItem>
            <NavLink to={`${/dialogs/id}`}>{name}</NavLink>
        </s.DialogItem>
    )
}