import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._reRender(this._state);
  },
  subcriber(observer) {
    this._reRender = observer;
  },
};

export default store;
