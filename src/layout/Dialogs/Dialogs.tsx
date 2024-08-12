import {s} from "./Dialogs.styled"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialog/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    const users: { name: string, id: number } [] = [
        {name: 'Alex', id: 1},
        {name: 'Nik', id: 2},
        {name: 'Helen', id: 3},
        {name: 'Rose', id: 4},
        {name: 'Vik', id: 5},
        {name: 'Max', id: 6},
    ]

    return (
        <s.StyledDialog>
            <h2>Dialogs</h2>
            <s.DialogList>
                {users.map(user => (
                    <DialogItem id={user.id} name={user.name}/>
                ))}

            </s.DialogList>
            <s.MessagesList>
                <Message text={'Hi !'}/>
                <Message text={'How are you ?'}/>
                <Message text={'I`m fine )'}/>
            </s.MessagesList>
        </s.StyledDialog>
    )
}