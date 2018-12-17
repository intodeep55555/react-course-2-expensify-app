import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) =>(
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

//enabling dispatch 'startlogin' from auth, when clicking Login button of LoginPage
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
