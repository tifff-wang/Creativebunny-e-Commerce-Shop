import React from 'react'
import './Spinner.styles.scss' 

const Spinner = ({ children }) => {
    return (
        <div className='spinner-container'>
            <p>{children}</p>
            <div className="spinner-icon"></div>
        </div>
    )
}

export default Spinner
