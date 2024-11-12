let reRender = () => {
    console.log('OOppss!!')
}

const store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi', likeCount: 1 },
                { id: 2, post: 'Yo!', likeCount: 33 },
            ],
            newPostText: ''
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
    },
    addPost: () => {
        const message = { id: 3, post: store.state.profilePage.newPostText, likeCount: 55, }

        store.state.profilePage.posts.push(message)
        store.state.profilePage.newPostText = ''
        reRender(store.state)
    },
    addNewPostText: (text) => {
        store.state.profilePage.newPostText = text
        reRender(store.state)
    },

}

export const subcriber = (observer) => {
    reRender = observer
}

export default store