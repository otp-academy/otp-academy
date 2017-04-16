import { connect } from 'react-redux';
import component from './component';
import { requestLogout } from 'actions/auth';


const mapStateToProps = (state) => {
  return {
    username: state.user.profile.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogout: () => (dispatch(requestLogout()))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);