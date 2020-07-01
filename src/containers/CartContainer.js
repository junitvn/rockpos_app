import { connect } from "react-redux";
import Cart from "../components/Cart";

const mapStateToProps = state => {
  return {
    data: state.database
  };
};

export default connect(mapStateToProps)(Cart);
