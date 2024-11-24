import s from "./Users.module.css";
import axios from "axios";
import profilePhoto from "../../images/profilePhoto.png";

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((Response) => {
      props.getUsers(Response.data.items);
    });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img className={s.ava} src={u.photos.small ? u.photos.small : profilePhoto} alt="ava" />
            </div>
            <div>
              {u.followed === true ? (
                <button
                  onClick={() => {
                    
                    props.unfollowAC(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followAC(u.id);
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
};

export default Users;
