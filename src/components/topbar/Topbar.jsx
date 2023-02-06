import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Media</span>
      </div>
      <div className="topbarCenter">
        <div className="Searchbar">
          <Search className="SearchIcon"/>
          <input placeholder="Search for Friend, Post or Video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Home Page</span>
          <span className="topbarLinks">timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconItemBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconItemBadge">4</span>
          </div> <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconItemBadge">3</span>
          </div>
        </div>
        <img src="/assets/Moraj.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  );
}
