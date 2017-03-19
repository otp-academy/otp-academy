import { connect } from 'react-redux';
import component from './component';
import { requestChampList } from 'Actions/champ';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestChampList: () => dispatch(requestChampList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);