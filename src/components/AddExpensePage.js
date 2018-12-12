import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');//optional: back to dashboard page
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        {/*description, amount of expense will be returned from Expense Form*/}
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//Enabling AddExpensePage accessing to redux 'props.dispatch'
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
