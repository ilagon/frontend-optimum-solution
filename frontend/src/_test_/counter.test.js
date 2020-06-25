import { shallow } from 'enzyme';
import React from 'react';
import Counter from './counter'

describe('counter', () => {
    const wrapper = shallow(<Counter />)
    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('start from 11', () => {
        expect(wrapper.find('.count').text()).toBe('11');
    })
    test('clicked button & counter + 1', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('.count').text()).toBe('12')
    })
})

describe('with name prop', () => {
    const wrapper = shallow(<Counter name='Frankie' />);
    test('render with name', () => {
        expect(wrapper.find('.name').text()).toBe('hi, Frankie')
    })

})