import { useState } from "react";

const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div>
        <div>{!editMode && <span onDoubleClick={() => setEditMode(true)}> {status} </span>}</div>
        <div>{editMode && <textarea  onBlur={() => setEditMode(false)} value={status} />}</div>
      </div>
    </>
  );
};

export default ProfileStatus;
