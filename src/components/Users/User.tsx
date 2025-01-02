import s from "./Users.module.css";
import profilePhoto from "../../images/user.png";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../type/type";
import {Button} from "antd";

type PropsType = {
    user: UserType
    followingInProgress: number[],
    setUnfollowUser: (userId:number)=> void
    setFollowUser: (userId:number)=> void
}
const User: FC<PropsType> = ({user, followingInProgress, setUnfollowUser, setFollowUser}) => {

    return (
        <>
            <div>
                <div>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img className={s.ava} src={user.photos.small ? user.photos.small : profilePhoto}
                                 alt="ava"/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? (
                            <Button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    setUnfollowUser(user.id)
                                }}> Unfollow </Button>
                        ) : (
                            <Button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    setFollowUser(user.id);
                                }}> Follow </Button>
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        <div> {user.name} </div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default User

