import { connect } from 'react-redux';
import Component from './component';
import { requestLogin } from '../../../actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    submitLogin: loginInfo => dispatch(requestLogin(loginInfo))
  };
}

export default connect(null, mapDispatchToProps)(Component);