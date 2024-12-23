import {profileAPI} from "../api/api";
import {PhotosType, PostsType, ProfileType} from "../type/type";
import {InferActionsTypes} from "./store-redux";




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

const profileReducer = (state = initialState, action: ActionType): InitianalType => {
    if (action.type === 'ADD_POST') {
        const body = state.newPostText;
        return {...state, posts: [...state.posts, {id: 3, post: body, likeCount: 55}], newPostText: ""};
    } else if (action.type === 'ADD_NEW_POST_TEXT') {
        return {...state, newPostText: action.text};
    } else if (action.type === 'SET_USER_PROFILE') {
        return {...state, profile: action.profile};
    } else if (action.type === 'SET_PROFILE_STATUS') {
        return {...state, status: action.status};
    } else if (action.type === 'UPDATE_PROFILE_STATUS') {
        return {...state, status: action.status};
    } else if (action.type === 'SAVE_PHOTO') {
        return {...state, profile: {...state.profile, photos: action.photo} as ProfileType};
    }
    return state;
};

type ActionType = InferActionsTypes<typeof actionAC>

export const actionAC = {
    addPostAC: () => ({type: 'ADD_POST'} as const),
    addNewPostAC: (text: string) => ({type: 'ADD_NEW_POST_TEXT', text} as const),
    setUserProfileAC: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setProfileStatusAC: (status: string) => ({type: 'SET_PROFILE_STATUS', status} as const),
    updateProfileStatusAC: (status: string) => ({
        type: 'UPDATE_PROFILE_STATUS',
        status
    } as const),
    savePhotoAC: (photo: PhotosType) => ({type: 'SAVE_PHOTO', photo} as const),
}
export const profileThunk = (userId: number) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.profileUser(userId)
        dispatch(actionAC.setUserProfileAC(data));
    };
};

export const setProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.profileStatus(userId)
        dispatch(actionAC.setProfileStatusAC(data));

    };
}
export const updateProfileStatus = (status: string) => {
    return async (dispatch: any) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actionAC.updateProfileStatusAC(status));
        }
    };
}
export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        const data: any = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(actionAC.savePhotoAC(data.data.photos));
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
