import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";

let mapStateToProps = state => {
  return { frendsNav: state.frendsNav };
};

const SuperNavbarContener = connect(mapStateToProps)(Navbar);
export default SuperNavbarContener;
