import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
