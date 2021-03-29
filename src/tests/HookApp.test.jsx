import { shallow } from "Enzyme"
import { HooksApp } from "../HooksApp";
import '@testing-library/jest-dom';
import React from 'react';

describe('Testing HookApp', () => {
    
    test('should match the snapshot', () => {

        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
