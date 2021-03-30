import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Testing custo hook useForm', () => {

    const initialForm ={
        userName: 'Quim Francès',
        edad: 42,
        email: 'quimifrances@gmail.com'
    }
    
    test('should return a default form', () => {
        const {result} = renderHook(()=>useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should de cambiar el valor del formulario(cambiar nombre)', () => {

        const {result} = renderHook(()=>useForm(initialForm));
        const [, handleInputChange]  = result.current;
        act(()=>{
            handleInputChange({
                target: {
                    name: 'userName',
                    value: 'Perico Palotes'
                }
            });
        })
        const [formValues] = result.current;
        expect(formValues.userName).toBe('Perico Palotes');
        
    })

    test('should reset form with reset', () => {

        const {result} = renderHook(()=>useForm(initialForm));
        const [, handleInputChange, reset]  = result.current;
        act(()=>{
            handleInputChange({
                target: {
                    name: 'userName',
                    value: 'Perico Palotes'
                }
            });
            reset();
        })
        const [formValues] = result.current;
        expect(formValues.userName).toBe('Quim Francès');
        
    })
    
    
    
})
