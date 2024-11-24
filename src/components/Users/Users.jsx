import s from "./Users.module.css";
import axios from "axios";
import profilePhoto from "../../images/user.png";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((Response) => {
      props.getUsers(Response.data.items);
    });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <div>
                <img className={s.ava} src={u.photos.small ? u.photos.small : profilePhoto} alt="ava" />
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
    );
  }
}

export default Users;
