import { connect } from 'react-redux';
import component from './component';
import { requestChampList, requestVersion } from '../../actions/champ';

function mapStateToProps(state) {
  return {
  	version: state.version.data,
  	champions: state.champ.data,
  	isFetching: state.champ.isFetching,
  	error: state.champ.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	requestChampList: () => dispatch(requestChampList()),
  	requestVersion: () => dispatch(requestVersion())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);