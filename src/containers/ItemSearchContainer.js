import { connect } from "react-redux";
import ItemSearch from "../components/ItemSearch";

const mapStateToProps = state => {
  return {
    home: state.home,
    data: state.database
  };
};

export default connect(mapStateToProps)(ItemSearch);
