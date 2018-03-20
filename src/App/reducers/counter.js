import fetch from 'isomorphic-fetch';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementValue = () => ({
    type: INCREMENT
})

export const decrementValue = () => ({
    type: DECREMENT
})

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECIEVED_DATA = 'RECIEVED_DATA';

export function requestData() {
    return { type: REQUEST_DATA };
  }
  
  export function receivedData(data) {
    return { type: RECIEVED_DATA, data };
  }
  
  export function getData() {
    return (dispatch) => {
      dispatch(requestData());
      return fetch('https://codepen.io/andismith/pen/oqzxyP.js')
      .then((response) => response.json())
      .then(res => {
        dispatch(receivedData(res));
      });
    };
  }
  

export default (state = {balance: 0, name: 'test'}, action) =>  {
    switch (action.type) {
      case INCREMENT:
        return  { name: state.name, balance: ++state.balance}
      case DECREMENT:
        return {name: state.name, balance: --state.balance }
        case RECIEVED_DATA: 
        return action.data
      default:
        return state
    }
  }
  