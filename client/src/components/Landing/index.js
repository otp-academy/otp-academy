import { connect } from 'react-redux';
import component from './component';
import { requestSession } from 'actions/auth';
import { requestChampList } from 'actions/champ';

const mapStateToProps = (state) => {
  return {
  	champList: state.champ.data,
    myChampions: state.user.champions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestChampList: () => dispatch(requestChampList()),
    requestSession: () => dispatch(requestSession())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);