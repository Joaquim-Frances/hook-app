import { useCounter } from "../../hooks/useCounter"
import { renderHook, act } from '@testing-library/react-hooks';


describe('Testing useCounter hook', () => {

    test('should return default values', () => {

        const { result } = renderHook(()=>useCounter());
        const { counter } = result.current;
        expect(counter).toBe(10);  
        expect(typeof(result.current.increment)).toBe('function');  
        expect(typeof(result.current.decrement)).toBe('function');  
        expect(typeof(result.current.reset)).toBe('function');  
          
    })
    test('should have the counter in 100', () => {

        const { result } = renderHook(()=>useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);  
        
    })
    

    test('increment function should return counter + 1', () => {

        const { result } = renderHook(()=>useCounter());
        const { increment } = result.current;

        act(()=>{
            increment();
        })

        expect(result.current.counter).toBe(11)   
    })

    test('increment function should return counter - 1', () => {

        const { result } = renderHook(()=>useCounter());
        const { increment, decrement } = result.current;

        act(()=>{
            increment();
            decrement();
            decrement();
        })

        expect(result.current.counter).toBe(9)   
    })

    test('increment function should reset the counter to initial value', () => {

        const { result } = renderHook(()=>useCounter());
        const { increment, reset } = result.current;

        act(()=>{
            increment();
            increment();
            increment();
            reset();
        })

        expect(result.current.counter).toBe(10)   
    })
    
})
