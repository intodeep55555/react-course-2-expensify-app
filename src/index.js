import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';

import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';

//import FireBase
import {firebase} from './firebase/firebase';

import LoadingPage from './components/LoadingPage';
//combining REDUX
import configureStore from './store/configureStore';
const store = configureStore();

//This is for providing react props with redux created store.
//Then, connect them like what 'ExpenseList.js' does.
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

//login logout directiing
firebase.auth().onAuthStateChanged((user)=>{
  if(user){//user will be automatically filled in if logged in, or it will be null
    //If fectching data from DB succeeded, then render page page.
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      //if you are in login page then
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });
  //if login fails
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/'); //direct to login page('/' defined in AppRouter.js)
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
