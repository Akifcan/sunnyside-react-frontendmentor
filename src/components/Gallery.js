import React from 'react'
import '../styles/AppGallery.css'


function Gallery() {
    return (
        <div className="gallery">
            <img className="image" src={require(`../images/desktop/image-gallery-cone.jpg`).default} />
            <img className="image" src={require(`../images/desktop/image-gallery-milkbottles.jpg`).default} />
            <img className="image" src={require(`../images/desktop/image-gallery-orange.jpg`).default} />
            <img className="image" src={require(`../images/desktop/image-gallery-sugarcubes.jpg`).default} />
        </div>
    )
}

export default Gallery