import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
//import { handleToggle } from "../../../components/08-useReducer/TodoApp";

const handleDelete = jest.fn()
const handleToggle = jest.fn()

const todo = {
    id:4,
    tarea: 'Comprar usb',
    done: true,
}

const i = 0;



describe('Testing in TodoListItem component', () => {
    
    const wrapper = shallow( <TodoListItem todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle}/>);

    test('should display correclty', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('should call delete method', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toBeCalled()
        expect(handleDelete).toBeCalledWith(todo.id)
        
    })

    test('should call toggle method', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toBeCalled()
        expect(handleToggle).toBeCalledWith(todo.id)
        
    })

    test('should writte correctly the <p></p> text', () => {

        
        expect(wrapper.find('p').text().trim()).toBe(`${i+1}. ${todo.tarea}`)
        
    })

    test('should have "complete" className if done is true', () => {

        wrapper.find('p').simulate('click');
        expect(wrapper.find('p').prop('className')).toBe('complete')
        expect(wrapper.find('p').hasClass('complete')).toBe(true)
        
    })
    
    
    
    
    
})
