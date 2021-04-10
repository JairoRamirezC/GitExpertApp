import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItems from './GifItems'

function GifGrid({resp}) {
    const {data:imagenes, loading} = useFetchGifs(resp)
        
    return (
        <div className='conteiner'>
            {
                loading && <p className='animate__flash'>Cargando...</p>
            }
            {
                imagenes.map(res => (
                    <GifItems key={res.id} {...res}/>
                ))
            }
        </div>
    )
}

export default GifGrid
