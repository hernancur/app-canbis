import React from 'react'
import "./grid.scss"
import Card from "./Card/Card.jsx"

export default function Grid(props) {
    return (
        <div className="grid">
            {
                props.data && 
                    props.data.map((card, i) => {
                        <Card title={card.name.split(" - ")[0]} image={card.image} key={i}/>
                    })
            }¡
        </div>
    )
}
