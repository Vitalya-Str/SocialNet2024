const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 1,
      following: true,
      fullname: "Vitalya S",
      status: "status",
      location: { Counry: "Kazakhstan", City: "Петропаловск" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 2,
      following: false,
      fullname: "Julia S",
      status: "status!!!",
      location: { Counry: "Kazakhstan", City: "Astana" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 3,
      following: false,
      fullname: "Artem S",
      status: "status....",
      location: { Counry: "Russia", City: "Moscow" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 4,
      following: true,
      fullname: "Alice S",
      status: "@@@@@@@",
      location: { Counry: "Belarus", City: "Minsk" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed: true };
        }
      }),
    };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map((u)=> {
        if(u.id === action.userId){
          return {...u, following: false}
        }
      })
    }
  }
  }
  return state;
};

export const followAC = (userId) => {
  return { type: "FOLLOW", userId };
};
export const unfollowAC = (userId) => {
  return { type: "UNFOLLOW", userId };
};

export default usersReducer;
