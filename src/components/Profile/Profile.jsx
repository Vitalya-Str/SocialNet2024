import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
