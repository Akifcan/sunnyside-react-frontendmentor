import React from 'react'
import menuIcon from '../images/icon-hamburger.svg'
import '../styles/AppMain.css'

function AppMain() {
    return (
        <main>
            <header>
                <p className="logo">sunnyside</p>
                <img width={30} src={menuIcon} alt="menu icon" />
            </header>
            <h1>We are  creatives</h1>
        </main>
    )
}

export default AppMain