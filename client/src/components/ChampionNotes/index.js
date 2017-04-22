import { connect } from 'react-redux';
import component from './component';
import './index.css';
import { requestUpdateNotes } from 'actions/user';

const mapStateToProps = (state) => {
  return {
    champList: state.champ.data,
    myChampions: state.user.champions,
    notes: state.user.notes,
    userId: state.user.profile.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	requestUpdateNotes: (userId, notes) => dispatch(requestUpdateNotes(userId, notes))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);