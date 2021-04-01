import { todoReducer } from "../../../components/08-useReducer/todoReducer"

const initialTodos = [{
    id: 1,
    todo: 'Apendre a estar sol',
    done: false,
},
{
    id: 2,
    todo: 'Tenir una bona economia',
    done: false,
}]


describe('Pruebas en todoReducer', () => {


    test('should return default state', () => {
        
        const state = todoReducer(initialTodos, {});
        expect(state.length).toBe(2);
        expect(state).toEqual(initialTodos);
        
    })

    test('should have an added todo', () => {
        
        const newTodo = {
            id: 3,
            todo: 'Donarse de baixa de la Caixa',
            done: false,
        }
        
        const agregarTodoAction = {
            type: 'add',
            payload: newTodo,
        }

        const state = todoReducer(initialTodos, agregarTodoAction);
    
        expect(state.length).toBe(3);
        expect(state).toEqual([...initialTodos, newTodo]);
       
    })

    test('should delete todo', () => {

        

        const deleteTodoAction = {
            type: 'delete',
            payload: 2,
        }
        
        const state = todoReducer(initialTodos, deleteTodoAction);
        console.log(state);
        expect(state.length).toBe(1);
        expect(state).toEqual([{
            id: 1,
            todo: 'Apendre a estar sol',
            done: false,
        }]);
    })

    test('should toggle done/undone a todo', () => {

        const toggleTodoAction = {
            type: 'toggle',
            payload: 2,
        }
        
        const state = todoReducer(initialTodos, toggleTodoAction);
        expect(state[1].done).toBe(true);
        expect(state[0].done).toBe(true);
        
    })
})
