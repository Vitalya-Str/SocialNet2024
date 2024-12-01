import s from "./Users.module.css";
import profilePhoto from "../../images/user.png";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { followingInProgressAC } from "../../redux/usersReducer";

class Users extends React.Component {
  componentDidMount() {
    this.props.isFetchingAC(true);

    usersAPI.getUsers(this.props.currentPage, this.props.count).then((data) => {
      this.props.getUsersAC(data.items);
      this.props.totalCountAC(data.totalCount);
      this.props.isFetchingAC(false);
    });
    this.props.currentPageAC(1);
  }
  pageNumber = (p) => {
    this.props.isFetchingAC(true);
    usersAPI.getUsers(p, this.props.count).then((data) => {
      this.props.getUsersAC(data.items);
      this.props.isFetchingAC(false);
    });
    this.props.currentPageAC(p);
  };

  followUser(id) {
    usersAPI.followedApi(id).then((data) => {
      this.props.followingInProgressAC(true, id);
      if (data.resultCode === 0) {
        return this.props.followAC(id);
      }
      this.props.followingInProgressAC(false, id);
    });
  }

  unfollowUser(id) {
    this.props.followingInProgressAC(true, id);
    usersAPI.unfollowedApi(id).then((data) => {
      if (data.resultCode === 0) {
        return this.props.unfollowAC(id);
      }
    });

    this.props.followingInProgressAC(false, id);
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.count);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <div>
          <div>
            {pages.map((p) => (
              <span
                onClick={() => {
                  this.pageNumber(p);
                }}
                className={this.props.currentPage === p && s.bold}
              >
                {p}
              </span>
            ))}
          </div>
          {this.props.users.map((u) => (
            <div key={u.id}>
              <div>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    <img className={s.ava} src={u.photos.small ? u.photos.small : profilePhoto} alt="ava" />
                  </NavLink>
                </div>
                <div>
                  {u.followed === true ? (
                    <button
                      disabled={this.props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        this.unfollowUser(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={this.props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        this.followUser(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <div> {u.name} </div>
                  <div>{u.status}</div>
                </div>
                <div>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Users;
