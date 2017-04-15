import { connect } from 'react-redux';
import component from './component';
import { requestSession, requestLogout } from 'actions/auth';


const mapStateToProps = (state) => {
  return {
    username: state.user.profile.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestSession: () => (dispatch(requestSession())),
    requestLogout: () => (dispatch(requestLogout()))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);