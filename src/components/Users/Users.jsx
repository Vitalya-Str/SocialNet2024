import s from "./Users.module.css";
import axios from "axios";
import profilePhoto from "../../images/user.png";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

class Users extends React.Component {
  componentDidMount() {
    this.props.isFetchingAC(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then((Response) => {
      this.props.getUsersAC(Response.data.items);
      this.props.totalCountAC(Response.data.totalCount);
      this.props.isFetchingAC(false);
    });
    this.props.currentPageAC(1);
  }
  pageNumber = (p) => {
    this.props.isFetchingAC(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.count}`).then((Response) => {
      this.props.getUsersAC(Response.data.items);
      this.props.isFetchingAC(false);
    });
    this.props.currentPageAC(p);
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
                      onClick={() => {
                        this.props.unfollowAC(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.followAC(u.id);
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
