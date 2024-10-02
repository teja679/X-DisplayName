import React, { useState } from 'react'
import './styles.css'

const FullNameDisplay = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [fullname, setFullname] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setFullname(`${firstname.trim()} ${lastname.trim()}`)
        // setFirstname('')
        // setLastname('')
    }
    return (
        <div className='main-div'>
            <h2>
                Full Name Display
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstname'>First Name:{' '} <input type='text' value={firstname} required onChange={(e) => setFirstname(e.target.value)} id='firstname' /> </label>
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name: <input type='text' value={lastname} required onChange={(e) => setLastname(e.target.value)} id='lastname' /> </label>
                </div>
                <div><button type='submit' >Submit</button></div>
            </form>
            <br />
            <span>{`Full Name: ${fullname}`}</span>
        </div>
    )
}

export default FullNameDisplay
