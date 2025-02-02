import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
//@ts-ignore
import {configureStore} from '@reduxjs/toolkit'

// const reducers = combineReducers({
//   profilePage: profileReducer,
//   dialogsPage: dialogsReducer,
//   sideBar: sideBarReducer,
//   usersPage: usersReducer,
//   auth: authReducer,
//   app: appReducer
// });

export const store = configureStore({
    //@ts-ignore
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer
    },
})


// const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
//export const useAppDispatch = useDispatch.withTypes<AppDispatch>()


type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends {[key: string]: (...arg:any[])=> any}> = ReturnType<PropertiesTypes<T>>
// type AppReducerType = typeof store
// export type StateReducerType = ReturnType<AppReducerType>

export default store;
