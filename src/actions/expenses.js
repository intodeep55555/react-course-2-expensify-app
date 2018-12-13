//actions for dispatching by redux
//dispatched action goes to reducers
import uuid from 'uuid';
import database from '../firebase/firebase';

//AddEXPENSE
//changing REDUX STORE
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
export const removeExpense = ({id}={}) => ({
  type:'REMOVE_EXPENSE',
  id
});
export const startRemoveExpense=({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(()=>{
      dispatch(removeExpense({id}));
    });
  };
};

//EDIT_EXPENSE
export const editExpense=(id, updates) =>({
  type:'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});
export const startSetExpenses = () =>{
  return (dispatch) => {
    //below return for tossing data to 'then' in "index.js"
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      //set fetched data(from DB) to redux array
      dispatch(setExpenses(expenses));
    });
  };
};
