export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementValue = () => ({
    type: INCREMENT
})

export const decrementValue = () => ({
    type: DECREMENT
})

export default (state = {value: 0, name: 'test'}, action) =>  {
    switch (action.type) {
      case INCREMENT:
        return  { name: state.name, value: ++state.value}
      case DECREMENT:
        return {name: state.name, value: --state.value }
      default:
        return state
    }
  }
  