import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage=(props)=>{
  return(
    <div>
      <ExpenseForm
      expense={props.expense}
      //description, amount of expense will be returned from Expense Form
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
        console.log('updated', expense);
      }}
      />

      <button onClick={() => {
        props.dispatch(removeExpense({ id:props.expense.id }));
        props.history.push('/');
      }}>Remove</button>

    </div>
  );
};

//Margin selelcted expense sates(descriotion, amount...) to EditExpense's props
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditExpensePage);
/*If only for connecting dispatch from redux without any other state,
then no need to connecting mapStateToProps*/
