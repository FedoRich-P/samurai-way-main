export type PostsArrPropsType = {
    id: number;
    text: string;
    likes: number;
}

export type MessagesPropsType = {
    id: number;
    text: string;
}

export type UsersPropsType = {
    id: number;
    name: string;
}

export type ProfilePagePropsType = {
    posts: PostsArrPropsType[];
}
export type messagesPagePropsType = {
    messages: MessagesPropsType[];
    users: UsersPropsType[];
}
export type AppStatePropsType = {
    profilePage: ProfilePagePropsType,
    messagesPage: messagesPagePropsType,
}

export type AppPropsType = {
    appState: AppStatePropsType;
}

export const state : AppStatePropsType= {

    profilePage: {
        posts: [
            {id: 1, text: 'First comment', likes: 25},
            {id: 2, text: 'Second  comment', likes: 17},
            {id: 3, text: 'Third comment', likes: 5},
            {id: 4, text: 'Fourth  comment', likes: 125},
        ],

    },

    messagesPage: {
        messages: [
            {text: 'Hi !', id: 1},
            {text: 'How are you ?', id: 2},
            {text: 'I`m fine )', id: 3},
            {text: 'Good bay', id: 4},
            {text: 'How are you ?', id: 5},
            {text: 'You are ...  )', id: 6},
        ],
        users: [
            {name: 'Alex', id: 1},
            {name: 'Nik', id: 2},
            {name: 'Helen', id: 3},
            {name: 'Rose', id: 4},
            {name: 'Vik', id: 5},
            {name: 'Max', id: 6},
        ],
    }
}


// export type ProfilePagePropsType = {
//     posts: {
//         id: number;
//         text: string;
//         likes: number;
//     }[];
// }
// export type messagesPagePropsType = {
//     messages: {
//         id: number;
//         text: string;
//     }[];
//     users: {
//         id: number,
//         name: string,
//     }[]
// }
// export type StatePropsType = {
//     profilePage: ProfilePagePropsType,
//     messagesPage: messagesPagePropsType,
// }
//
// export type AppPropsType = {
//     state: StatePropsType;
// }