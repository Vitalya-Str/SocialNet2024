import {profileAPI} from "../api/api";
import {PhotosType, PostsType, ProfileType} from "../type/type";

const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";
const SAVE_PHOTO = "/profileReducer/SAVE_PHOTO";


const initialState = {
    posts: [
        {id: 1, post: "Hi", likeCount: 1},
        {id: 2, post: "Yo!", likeCount: 33},
    ] as PostsType[],
    newPostText: "",
    profile: null as ProfileType | null,
    status: "",
};

type InitianalType = typeof initialState

const profileReducer = (state = initialState, action: any): InitianalType => {
    if (action.type === ADD_POST) {
        const body = state.newPostText;
        return {...state, posts: [...state.posts, {id: 3, post: body, likeCount: 55}], newPostText: ""};
    } else if (action.type === ADD_NEW_POST_TEXT) {
        return {...state, newPostText: action.text};
    } else if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile};
    } else if (action.type === SET_PROFILE_STATUS) {
        return {...state, status: action.status};
    } else if (action.type === UPDATE_PROFILE_STATUS) {
        return {...state, status: action.status};
    } else if (action.type === SAVE_PHOTO) {
        return {...state, profile: {...state.profile, photos: action.photo} as ProfileType};
    }
    return state;
};

type addPostACType = {
    type: typeof ADD_POST
}
export const addPostAC = (): addPostACType => ({type: ADD_POST});

type addNewPostACType = {
    type: typeof ADD_NEW_POST_TEXT
    text: string
}
export const addNewPostAC = (text: string): addNewPostACType => ({type: ADD_NEW_POST_TEXT, text});

type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfileAC = (profile: ProfileType): setUserProfileACType => ({type: SET_USER_PROFILE, profile});

type setProfileStatusACType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}
export const setProfileStatusAC = (status: string): setProfileStatusACType => ({type: SET_PROFILE_STATUS, status});

type updateProfileStatusACType = {
    type: typeof UPDATE_PROFILE_STATUS
    status: string
}
export const updateProfileStatusAC = (status: string): updateProfileStatusACType => ({
    type: UPDATE_PROFILE_STATUS,
    status
});

type savePhotoACType = {
    type: typeof SAVE_PHOTO
    photo: PhotosType
}
export const savePhotoAC = (photo: PhotosType): savePhotoACType => ({type: SAVE_PHOTO, photo});

export const profileThunk = (userId: number) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.profileUser(userId)
        dispatch(setUserProfileAC(data));
    };
};

export const setProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.profileStatus(userId)
        dispatch(setProfileStatusAC(data));

    };
}
export const updateProfileStatus = (status: string) => {
    return async (dispatch: any) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(updateProfileStatusAC(status));
        }
    };
}
export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoAC(data.data.photos));
        }
    };
}
export const saveProfile = (profile: ProfileType) => (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    return profileAPI.saveProfileContacts(profile).then(data => {
        if (data.resultCode === 0) {
            dispatch(profileThunk(userId))
        }
    })
}

export default profileReducer;
