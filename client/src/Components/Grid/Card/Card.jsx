import React from 'react'
import "./card.scss"

export default function Card({image, title}) {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={image} alt="" />
            </div>
            <div className="cardTitle titleWhite">
                <p>{title}</p>
            </div>
        </div>
    )
}
