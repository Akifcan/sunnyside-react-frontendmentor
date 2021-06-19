import React from 'react'
import AppIcon from './AppIcon'

function AppFooter() {
    return (
        <footer>
            <h1 className="logo">sunnyside</h1>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <div className="socials center">
                <AppIcon icon="icon-facebook.svg" />
                <AppIcon icon="icon-instagram.svg" />
                <AppIcon icon="icon-pinterest.svg" />
            </div>
        </footer>
    )
}

export default AppFooter
