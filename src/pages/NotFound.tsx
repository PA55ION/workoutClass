import React from 'react';
import ErrorPage from '../assets/ErrorPage.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="notfound_img" src={ErrorPage} alt='404-error'/>
        </div>
    )
}

export default NotFound;