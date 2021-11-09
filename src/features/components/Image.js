import React from 'react'
export default function Image({props}) {
    const {src, alt, imageRef} = props;
    return (
        <div className = "image-section">
            <img ref = {imageRef}  src={src} alt={alt} />
        </div>
    )
}
