import s from "./User.module.css";

const User = (props) => {
  return (
    <div>
      <div>
        <div>
          <img src={props.images} className={s.ava} />
        </div>
        <div>
          <button>follow</button>
        </div>
        <div>{props.fullname}</div>
        <div> {props.status} </div>
        <div> {props.country} </div>
      </div>
    </div>
  );
};

export default User;
