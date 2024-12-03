import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
