import { connect } from "react-redux";
import Search from "../components/Search";

const mapStateToProps = state => {
  return {
    data: state.database,
    home: state.home
  };
};

export default connect(mapStateToProps)(Search);
