import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {


    const [ images , setImages ] = useState([]);
    const [ isLoading , setIsLoading ] = useState(true);
    
    const getImages = () => {
        const resp = getGifs(category);
        resp.then( (value) => {
            setImages(value);
            setIsLoading(false);
        });
    }

    useEffect( () => {
        getImages();
    }, [ ] );

    return {
        images,
        isLoading,
    }
}
