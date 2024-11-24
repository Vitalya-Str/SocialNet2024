import s from "./Users.module.css";

const Users = (props) => {
  const stateCopy = [
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 1,
      following: true,
      fullname: "Vitalya S",
      status: "status",
      location: { country: "Kazakhstan", city: "Petrope" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 2,
      following: false,
      fullname: "Julia S",
      status: "status!!!",
      location: { country: "Kazakhstan", city: "Astana" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 3,
      following: false,
      fullname: "Artem S",
      status: "status....",
      location: { country: "Russia", city: "Moscow" },
    },
    {
      images: "https://cs10.pikabu.ru/post_img/big/2020/05/18/8/1589804231127867240.jpg",
      id: 4,
      following: true,
      fullname: "Alice S",
      status: "@@@@@@@",
      location: { country: "Belarus", city: "Minsk" },
    },
  ];
  if (props.users.length === 0) {
    props.getUsers(stateCopy);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img className={s.ava} src={u.images} alt="ava" />
            </div>
            <div>
              {u.following === true ? (
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
              <div> {u.fullname} </div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
