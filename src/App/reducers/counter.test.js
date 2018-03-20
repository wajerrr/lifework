import counter, {initialState, incrementValue, decrementValue, receivedData} from './counter';
describe('counter reducer', () => {
test('eturn initial state if not action and current state provided', () => {
    expect(counter()).toEqual(initialState);
});

test('increment value for current action', () => {
    expect(counter(initialState, incrementValue())).toEqual({name: initialState.name, balance: initialState.balance +1});
});

test('decrement value for current action', () => {
    expect(counter(initialState, decrementValue())).toEqual({name: initialState.name, balance: initialState.balance -1});
});

test('updates state with new data for receivedData action', () => {
    const newState = {name: 'name 2', balance: 66}
    expect(counter(initialState, receivedData(newState))).toEqual(newState);
});
});