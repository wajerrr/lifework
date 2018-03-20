import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from'./App';
import React from 'react';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    const props = {
        balance: 10,
        name: 'name'
    }
    test('renders props', () => {
        const wrapper = shallow(<App name={props.name} balance={props.balance} />);
        const h2 = wrapper.find('h2');
        const name = h2.at(0)
        const balance = h2.at(1)
        expect(name.text()).toEqual(props.name);
        expect(balance.text()).toEqual(String(props.balance));
    });

    test('renders warning when balance below 0', () => {
        const wrapper = shallow(<App balance={-10} />);
        expect(wrapper.find('h1').text()).toEqual('YOU ARE BROKE');
    });
    
    test('executes provided increment function on click', () => {
        const incrementMock = jest.fn()
        const wrapper = shallow(<App increment={incrementMock} />);
        wrapper.find('button').at(0).simulate('click');
        expect(incrementMock.mock.calls.length).toEqual(1);
    });
    
    
    test('executes provided decrement function on click', () => {
        const decrementMock = jest.fn()
        const wrapper = shallow(<App decrement={decrementMock} />);
        wrapper.find('button').at(1).simulate('click');
        expect(decrementMock.mock.calls.length).toEqual(1);
    });
    });