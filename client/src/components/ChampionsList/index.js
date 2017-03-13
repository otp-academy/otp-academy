import { connect } from 'react-redux';
import component from './component';
import { requestChampList, requestVersion } from '../../actions/champ';

function mapStateToProps(state) {
  return {
  	version: state.version,
  	champions: state.champions,
  	isFetching: state.isFetchingVersion || state.isFetchingChampList,
  	error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	requestChampList: () => dispatch(requestChampList()),
  	requestVersion: () => dispatch(requestVersion())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);