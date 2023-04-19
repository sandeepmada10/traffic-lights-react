import React from 'react'
import './Lights.css'

export default function Lights({ color, light }) {
    return (
        <>
            <div className='container'>

                <div className='colors'
                    style={{ backgroundColor: light === true ? color : 'black' }}>
                </div>

            </div>
        </>

    )
}


