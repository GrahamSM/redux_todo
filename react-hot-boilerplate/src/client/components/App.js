import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

function mapStateToProps(state){
  return {
  }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
//Takes regular main component, and adds all of the data, action creators, etc..
// TODO: Review what is going on here!

export default App;
