import { connect } from 'react-redux';
import component from './component';
import './index.css';

const mapStateToProps = (state) => {
  return {
    champList: state.champ.data,
    myChampions: state.user.champions,
    notes: state.user.notes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);