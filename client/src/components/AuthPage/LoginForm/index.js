import { connect } from 'react-redux';
import component from './component';
import { requestLogin } from '../../../actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    submitLogin: loginInfo => dispatch(requestLogin(loginInfo))
  };
}

export default connect(null, mapDispatchToProps)(component);