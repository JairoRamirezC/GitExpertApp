import React, { useState } from 'react'
import AddCategory from '../Components/AddCategory'
import GifGrid from '../Components/GifGrid'


export default function GifExpertApp (){
    const [val, setVal] = useState([])
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setVal={setVal}/>
            <ol>
                {val.map((resp, index) => (
                    <GifGrid resp={resp} key={index}/>
                ))}
            </ol>
        </>
    )
}