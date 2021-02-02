import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
// import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import {useDataLayerValue} from './DataLayer'

function Sidebar() {
  const [{ playlist }, dispatch] = useDataLayerValue();
  console.log(playlist);
  return (
    <div className="sidebar">
      {/*Spotify Logo */}
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      {playlist?.items?.map(playlists => {
        return <SidebarOption key={ playlists.name} title={playlists.name} />
      })}
     
      <hr />
    </div>
  );
}

export default Sidebar;
