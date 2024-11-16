const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT'

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi", likeCount: 1 },
        { id: 2, post: "Yo!", likeCount: 33 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialog: [
        { id: 1, name: "Vitalya" },
        { id: 2, name: "Julya" },
      ],
      messages: [
        { id: 1, message: "3daroVa" },
        { id: 2, message: "Oppps" },
      ],
      newMessage: "",
    },
    sideBar: [
      { id: 1, name: "Kama" },
      { id: 2, name: "Rys" },
      { id: 3, name: "Artem" },
    ],
  },
  _reRender() {
    console.log("OOppss!!");
  },
  useState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const post = { id: 3, post: this._state.profilePage.newPostText, likeCount: 55 };

      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostText = "";
      this._reRender(this._state);
    } else if (action.type === ADD_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._reRender(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const message = { id: 3, message: this._state.dialogsPage.newMessage };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessage = "";
      this._reRender(this._state);
    }else if (action.type === ADD_NEW_MESSAGE_TEXT){
      this._state.dialogsPage.newMessage = action.message
      this._reRender(this._state)
    }
  },
  subcriber(observer) {
    this._reRender = observer;
  },
};

export const addNewMessageTextAC = (message)=>{
  return { type: ADD_NEW_MESSAGE_TEXT , message};
}
export const addMessageAC = () =>{
  return { type: ADD_MESSAGE };
}
export const addPostAC = () => {
  return { type: ADD_POST };
};

export const addNewPostAC = (text) => {
  return { type: ADD_NEW_POST_TEXT,  text };
};

export default store;
