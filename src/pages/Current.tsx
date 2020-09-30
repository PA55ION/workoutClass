import React, { useContext } from 'react';
import { Context } from '../Context'
import VideoCards from '../components/VideoCards'


const Current = () => {
    const { addVideo } = useContext(Context);
    console.log('add video:', addVideo)

    const newVideo = addVideo.map((item: any, id: any) => (
        <VideoCards item={item} key={id} />
    ))
    return (
        <div className="container-fluid">
        <h1 className="current_header header">Current Content</h1>
            <div className="container">
                { newVideo }
            </div>
        </div>

    )
}

export default Current;