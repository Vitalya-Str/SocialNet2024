import s from "./Users.module.css";
import profilePhoto from "../../images/user.png";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.count);
  }
  pageNumber = (p) => {
    this.props.getUsers(p, this.props.count);
  };

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
                        this.props.unfollowUser(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={this.props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        this.props.followUser(u.id);
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
