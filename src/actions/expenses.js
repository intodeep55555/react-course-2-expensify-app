//actions for dispatching by redux
//dispatched action goes to reducers
import uuid from 'uuid';
import database from '../firebase/firebase';

//AddEXPENSE
export const addExpense = (expense) => ({
  type:'ADD_EXPENSE',
  expense
});
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const{
      description='',
      note='',
      amount=0,
      createdAt=0
    } = expenseData;
    const expense = {description, note, amount, createdAt};
    //Update DB and then dispatch redux action
    //(return for tossing data to following 'then')
    return database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
}
//REMOVE_EXPENSE
export const removeExpense = ({ id }={}) => ({
  type:'REMOVE_EXPENSE',
  id
});
//EDIT_EXPENSE
export const editExpense=(id, updates) =>({
  type:'EDIT_EXPENSE',
  id,
  updates
});
