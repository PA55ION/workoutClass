import React, { useEffect, useState } from 'react';
import data from './data';

interface AppContext {
    videos: Video[];
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>
    addToFavorite?: any
    addVideo?: any
    removeFromFavorite?: any;
    rating?: any;
}

interface Children {
    children: React.ReactNode;
}

interface Video {
    id: string;
    image: string;
    title: string;
    isFavorite: boolean;
    rating: number;
}

const Context = React.createContext<Partial<AppContext>>({});

const storage = JSON.parse(localStorage.getItem('video') || '[]')


const ContextProvider = ({ children }: Children) => {
    const [videos, setVideos] = useState<Array<Video>>([]);
    const [addVideo, setAddVideo] = useState(storage);
    const [rating, setRating] = useState();
    // fetch data
    useEffect(() => {
        const timer = setTimeout(() => setVideos(data), 1000)
        return () => clearInterval(timer)
    }, [])

    // local storage
    useEffect(() => {
        localStorage.setItem('video', JSON.stringify(addVideo))
    }, [addVideo])

    function addToFavorite(newVideo: any) {
        setAddVideo((prevVideo: any) => [...prevVideo, newVideo])
    }

    function removeFromFavorite(id: any) {
        // localStorage.clear()
        setAddVideo((previous: any)=> previous.filter((item: any) => item.id !== id))
    }

    return(
       <Context.Provider value={{ videos, addToFavorite, addVideo, removeFromFavorite, rating }}>
           { children }
       </Context.Provider>
    )
}

export { ContextProvider, Context}