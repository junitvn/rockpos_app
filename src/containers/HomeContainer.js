import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    data: state.database,
    cart: state.cart,
    home: state.home
  };
};

export default connect(mapStateToProps)(Home);
