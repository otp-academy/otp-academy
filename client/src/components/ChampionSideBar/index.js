import { connect } from 'react-redux';
import component from './component';
import { requestAddChamp } from 'Actions/user';

const mapStateToProps = (state) => {
  return {
    champList: state.champ.data,
    myChampions: state.user.champions,
    userId: state.user.profile.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	requestAddChamp: (userId, champion) => dispatch(requestAddChamp(userId, champion))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);