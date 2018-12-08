import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';//actions for redux dispatching

class ExpenseListFilters extends React.Component{
  state={
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) =>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) =>{
    this.setState(() => ({calendarFocused}));
  }
  render() {
    return (
      <div>
        {/* text filtering */}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        {/* pulldown for sorting(sortBy is defined in reducer
          filters.js : date of amount) */}
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if(e.target.value === 'date'){
              this.props.dispatch(sortByDate());
            }else if (e.target.value==='amount'){
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        {/*The Calendar will show according the conditions below.*/}
        <DateRangePicker
          startDate = {this.props.filters.startDate}
          endDate = {this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonth={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

/*combine redux created store(state) to
react props by using 'connect'*/
const mapStateToProps = (state) => {
  return{
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
