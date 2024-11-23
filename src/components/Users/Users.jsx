import User from "./User/User";

const Users = (props) => {
  debugger
  const user = props.users.map((u) => (
    <User
      images={u.images}
      id={u.id}
      key={u.id}
      status={u.status}
      fullname={u.fullname}
      country={u.location.country}
      followAC={props.followAC}
      unfollowAC={props.unfollowAC}
    />
  ));

  return <div>{user}</div>;
};

export default Users;
