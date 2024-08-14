import {s} from "./Dialogs.styled"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialog/DialogItem";
import {Message} from "./Message/Message";

export type MessagesPropsType = {
    id: number;
    text: string;
}

export type UsersPropsType = {
    id: number;
    name: string;
}

export type StatePropsType = {
   messages: MessagesPropsType[];
   users:  UsersPropsType[];
}

export type DialogsPropsType = {
   state: StatePropsType;
}

export const Dialogs = ({state} : DialogsPropsType) => {

    console.log(state)
    return (
        <s.StyledDialog>
            <h2>Dialogs</h2>
            <s.DialogList>
                {state.users.map(({id, name}) => (
                    <DialogItem key={id} id={id} name={name}/>
                ))}

            </s.DialogList>
            <s.MessagesList>
                {
                    state.messages.map(({text}, i) => (
                        <Message key={i} text={text}/>
                    ))
                }
            </s.MessagesList>
        </s.StyledDialog>
    )
}