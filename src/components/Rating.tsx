import React, { useState, useContext, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'
import { Context } from '../Context'

const starStorage = JSON.parse(localStorage.getItem('rating') || '0')
const Rating = ({ ratings}: any) => {
    const [rating, setRating] = useState(starStorage)
    const [hover, setHover] = useState<null | undefined | number>(null)

    useEffect(() => {
        localStorage.setItem('rating', JSON.stringify(rating))
    }, [rating])

    return(
        <div>
            {[...Array(ratings)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                <label key={i}>
                    <input type='radio' name='rating' 
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                        className='star'
                        color={ratingValue <= (hover || rating) ? '#ffc107': '#e4e5e9'}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
                )
            })}
        </div>
    )
}

export default Rating;