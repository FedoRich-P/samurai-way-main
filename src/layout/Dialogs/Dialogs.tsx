import {s} from "./Dialogs.styled"
import {DialogItem} from "./dialog/DialogItem";
import {Message} from "./Message/Message";
import { messagesPagePropsType} from "../../redux/state";

export const Dialogs = ({messages, users}: messagesPagePropsType) => {

    return (
        <s.StyledDialog>
            <h2>Dialogs</h2>
            <s.DialogList>
                {users.map(({id, name}) => (
                    <DialogItem key={id} id={id} name={name}/>
                ))}

            </s.DialogList>
            <s.MessagesList>
                {
                    messages.map(({text}, i) => (
                        <Message key={i} text={text}/>
                    ))
                }
            </s.MessagesList>
        </s.StyledDialog>
    )
}