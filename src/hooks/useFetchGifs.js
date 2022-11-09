
import { useState ,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) => {

 const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState(true)
  
    const getImages = async () => {

        const newImages = await getGifs(category,5);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // getGifs(category).then(newImages=> setImages(newImages));
        getImages();

    }, []);

  return {
images,
isLoading

  }
}
