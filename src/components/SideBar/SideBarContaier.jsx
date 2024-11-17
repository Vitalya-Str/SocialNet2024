import { connect } from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

export const SideBarContainer = connect(mapStateToProps)(SideBar);
