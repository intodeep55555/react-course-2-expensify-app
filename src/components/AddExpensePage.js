import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      //description, amount of expense will be returned from Expense Form
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/'); //optional: back to dashboard page
      }}
    />
  </div>
);

//Enabling AddExpensePage accessing to redux 'props.dispatch'
export default connect()(AddExpensePage);
