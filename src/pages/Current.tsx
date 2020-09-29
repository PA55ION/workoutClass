import React, { useContext } from 'react';
import { Context } from '../Context'
import VideoCards from '../components/VideoCards'
// import Cards from '../components/Cards'

const Current = () => {
    const { addVideo } = useContext(Context);
    console.log('add video:', addVideo)

    const newVideo = addVideo.map((item: any, id: any) => (
        <VideoCards item={item} key={id} />
    ))
    return (
        <div className="container-fluid">
            <div className="container">
                { newVideo }
            </div>
        </div>

    )
}

export default Current;