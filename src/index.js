import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';

//Manipulate Expenses and filters and Showing the results
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

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

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
