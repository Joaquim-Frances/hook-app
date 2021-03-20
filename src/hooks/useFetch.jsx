import { useEffect, useState } from "react"



export const useFetch = ( url, id ) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect( ()=>{

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })

            })

    }, [url, id])

    return state;

}