import React from 'react'
import "./card.scss"

export default function Card(props) {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={props.image} alt="" />
            </div>
            <div className="cardTitle titleWhite">
                <p>{props.title}</p>
            </div>
        </div>
    )
}
