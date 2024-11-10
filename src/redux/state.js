import { reRender } from "../render"

const state = {
    profilePage: {
        posts: [
            { id: 1, post: 'Hi', likeCount: 1 },
            { id: 2, post: 'Yo!', likeCount: 33 },
        ]
    },
    dialogsPage: {
        dialog: [
            { id: 1, name: 'Vitalya' },
            { id: 2, name: 'Julya' },
        ],
        messages: [
            { id: 1, message: '3daroVa' },
            { id: 2, message: 'Oppps' },
        ]
    },
    sideBar: [
        { id: 1, name: "Kama" },
        { id: 2, name: "Rys" },
        { id: 3, name: "Artem" }
    ]
}

export const addPost = (newMassage) => {
    const message = { id: 3, post: newMassage, likeCount: 55, }

    state.profilePage.posts.push(message)
    reRender(state)
}

export default state