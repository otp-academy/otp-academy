import { connect } from 'react-redux';
import component from './component';
import { requestChampList, requestVersion } from '../../actions/champ';

function mapStateToProps(state) {
  return {
  	version: state.champ.version.version,
  	champions: state.champ.champList.champList,
  	isFetching: state.champ.version.isFetchingVersion || state.champ.champList.isFetchingChampList,
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