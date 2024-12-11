import s from "./Users.module.css";
import profilePhoto from "../../images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollowUser, followUser}) => {

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
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    unfollowUser(user.id)
                                }}> Unfollow </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    followUser(user.id);
                                }}> Follow </button>
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

