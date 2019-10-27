import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";

let mapStateToProps = state => {
  return { frendsNav: state.frendsNav };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
