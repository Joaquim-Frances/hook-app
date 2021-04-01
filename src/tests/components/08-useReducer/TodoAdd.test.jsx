import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"
//import { handleAddTodo } from "../../../components/08-useReducer/TodoApp";


describe('Testing todoAdd component', () => {
 
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}/>)

    test('should display correctly', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('shouldnt call handleAddTodo if the form is empty', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})
        
        expect(handleAddTodo).toBeCalledTimes(0);
        
    })

    test('shouldnt call handleAddTodo if the form is filled', () => {


        const value = 'Aprender test';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'tarea',
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})
        
        expect(handleAddTodo).toBeCalledTimes(1);
        expect(handleAddTodo).toBeCalledWith({
            id: expect.any(Number),
            tarea: value,
            done: false,
        });
        expect(wrapper.find('input').prop('value')).toBe('')
        
    })
    
    
    
})
