import './Logo.css'
import React from 'react'

import ImgLogo from "../../assets/images/logo.png"

const Logo = (props) => {
    return(
        <aside className='logo'>
            <a href="/" className='logo'>
                <img src={ImgLogo} alt="logo" />
            </a>
        </aside>
    )
    
}

export default Logo