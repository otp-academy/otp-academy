import { connect } from 'react-redux';
import component from './component';
import { requestSession } from 'actions/auth';


const mapStateToProps = (state) => {
  return {
    username: state.user.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestSession: dispatch(requestSession())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);