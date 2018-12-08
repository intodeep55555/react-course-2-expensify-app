import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

//this is noraml react class(states and methods are defined in this class) without redux
export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props); //Inherit props from the upper class
    this.state = { //Set own statea
      //If from AddExpense no date will be shown('') ,but from EditExpense
      description: props.expense? props.expense.description: '',
      note: props.expense? props.expense.note:'',
      amount: props.expense? (props.expense.amount / 100).toString():'',
      createdAt: props.expense? moment(props.expense.createdAt): moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange =(e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChange=(e) =>{
    const note = e.target.value;
    this.setState(()=>({note}));
  };
  onAmountChange=(e)=>{
    const amount = e.target.value;

    //to understanfing go to 'regex101.com'
    //In this case only enable '2 decimal number'
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };
  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit =(e) =>{
    e.preventDefault();
    //error handling in the case of no input in description and amount field
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({error:'Please provide description and amount.'}));
    }else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        /*onSubmit prop is from AddExpensePage.js. and the contents(description, amount, ...)
        will be returned to AddEpensePage by onSubmit Form.*/
        description:this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value = {this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
