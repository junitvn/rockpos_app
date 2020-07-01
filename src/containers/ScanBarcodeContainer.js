import { connect } from "react-redux";
import ScanBarcode from "../components/ScanBarcode";

const mapStateToProps = state => {
  return {
    data: state.database,
    home: state.home
  };
};

export default connect(mapStateToProps)(ScanBarcode);
