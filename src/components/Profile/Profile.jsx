import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPostsContainer state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
