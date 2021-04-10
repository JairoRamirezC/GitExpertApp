import React from 'react'

function GifItems({title, images}) {
    return (
        <div className='card animate__animated animate__bounceIn'>
            <h1>{title}</h1>
            <img src={images} alt={title}/>
        </div>
    )
}

export default GifItems
