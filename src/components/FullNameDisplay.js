import React, { useState } from 'react'
import './styles.css'

const FullNameDisplay = () => {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    const [fullname, setFullname] = useState('')
    const handleChange = (e) => {
        setName({
            ...name,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFullname(`${name.firstname} ${name.lastname}`)
    }
    return (
        <div className='main-div'>
            <h2>
                Full Name Display
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstname'>First Name:{' '} <input type='text' required onChange={handleChange} id='firstname' /> </label>
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name: <input type='text' required onChange={handleChange} id='lastname' /> </label>
                </div>
                <div><button type='submit' >Submit</button></div>
            </form>
            <br />
            <p>Full Name: {fullname}</p>
        </div>
    )
}

export default FullNameDisplay
