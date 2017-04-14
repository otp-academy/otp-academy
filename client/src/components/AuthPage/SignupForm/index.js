import { connect } from 'react-redux';
import component from './component';
import { requestSignUp } from 'actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    requestSignUp: signUpInfo => dispatch(requestSignUp(signUpInfo))
  };
}

export default connect(null, mapDispatchToProps)(component);