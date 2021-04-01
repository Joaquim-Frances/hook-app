import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe('Testing todo list component', () => {

    const wrapper = shallow( <TodoList todos={demoTodos} handleToggle={handleToggle} handleDelete={handleDelete} />);

    test('should display correctly', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('should display the correct number of items', () => {

       expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
       expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function))
        
    })
    
    
    
})
