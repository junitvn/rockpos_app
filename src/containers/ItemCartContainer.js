import { connect } from "react-redux";
import ItemCart from "../components/ItemCart";

const mapStateToProps = state => {
  return {
    data: state.database
  };
};

export default connect(mapStateToProps)(ItemCart);
