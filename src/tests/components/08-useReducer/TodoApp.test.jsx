import React from 'react';
import {shallow, mount } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos"
import { act } from '@testing-library/react';

describe('Testing TodoApp', () => {

    const wrapper = shallow( <TodoApp />)

    test('should display correctly', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    // test('should to add a TODO', () => {

    //     const wrapper = mount( <TodoApp /> );
        
    //     act( ()=>{
    //         wrapper.find('TodoAdd').prop('handleTodoAdd')(demoTodos[0]);
    //         wrapper.find('TodoAdd').prop('handleTodoAdd')(demoTodos[1]);

    //     });
        
    //     expect(wrapper.find('h1').text().trim()).toBe( 'Todo List ( 4 )')
    // })

    // test('should delete a TODO', () => {

    //     wrapper.find('TodoAdd').prop('handleTodoAdd')(demoTodos[0]);
    //     expect(wrapper.find('h1').text().trim()).toBe( 'Todo List ( 1 )')
        
    // })
  
})
