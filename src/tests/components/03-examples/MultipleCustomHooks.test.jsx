import React from 'react';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing MultipleCustomHook component', () => {

    beforeEach (() => {
        
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {},
        });
      
    })

    test('should display correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        })

        const wrapper = shallow( <MultipleCustomHooks />);
        
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('should display information when it have it', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Quim',
                quote: 'Nama Gana, Nama Gana, Gana Gana Nam Nam!',
            }],
            loading: false,
            error: null,
        })
        
        const wrapper = shallow( <MultipleCustomHooks />);
        
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Nama Gana, Nama Gana, Gana Gana Nam Nam!');
        expect(wrapper.find('footer').text().trim()).toBe('Quim');
        
        
    })
    
    
})
