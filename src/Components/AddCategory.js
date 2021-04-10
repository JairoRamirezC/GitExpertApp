import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setVal}) {
    const [text, setText] = useState('')

    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setVal(val => [text, ...val])
        console.log('Agregado')
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            {/* <input type="number" name='cant' value={text.cant} onChange={handleChange}/> */}
            <button type='submit'>Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setVal: PropTypes.func.isRequired
}