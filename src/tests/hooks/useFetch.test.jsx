import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Testing useFetch custom Hook', () => {

    test('should return default data', () => {

        const {result} = renderHook( ()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const {data, loading, error} = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
        
    })

    test('should have correct data, loading false, error false', async() => {

        const receivedObject = {
            quote_id: 1,
            quote: 'I am not in danger, Skyler. I am the danger!',
            author: 'Walter White',
            series: 'Breaking Bad'
        }

        const {result, waitForNextUpdate} = renderHook( ()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout:2000});

        const {data, loading, error} = result.current;

        expect( data[0]).toEqual(receivedObject);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);
        
    })

    test('should return an error message when cant return data', async() => {

        const {result, waitForNextUpdate} = renderHook( ()=>useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate();

        const {data, loading, error} = result.current;
        
        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('No se pudo cargar la data!');
        
    })
    
})
