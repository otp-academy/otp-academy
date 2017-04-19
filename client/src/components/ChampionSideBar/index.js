import { connect } from 'react-redux';
import component from './component';
import { requestAddChamp, requestDeleteChamp } from 'actions/user';

const mapStateToProps = (state) => {
  return {
    champList: state.champ.data,
    myChampions: state.user.champions,
    userId: state.user.profile.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	requestAddChamp: (userId, champion) => dispatch(requestAddChamp(userId, champion)),
  	requestDeleteChamp: (userId, champion) => dispatch(requestDeleteChamp(userId, champion))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);