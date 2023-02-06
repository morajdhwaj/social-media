import { Cake } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <Cake className="birthdayImg" />
        <span className="birthdayText">
          <b>Manish Sahu</b> and <b>3 other Friends</b> have a birthday today
        </span>
      </div>
      <img src="assets/pizza.jpeg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Raipur</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Kumhari</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/Moraj.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Moraj</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/Ankit.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Ankit</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/rizwan_1.png"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Rizwan Chouhan</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/Moraj.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Moraj Dhwaj</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/Ankit.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Ankit Pandey</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/rizwan_1.png"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Rizwan Chouhan</span>
        </div>
      </div>
    </>
  );
};

export default function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
