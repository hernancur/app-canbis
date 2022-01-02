import React from 'react'
import "./card.scss"

export default function Card(props) {
    return (
        <div class="card">
            <div class="cardImg">
                <img src="https://canamo.net/sites/default/files/images/2020/12/05/La-ra%C3%ADz.-el-camino-hacia-el-cogollo.jpg" />
            </div>
            <div class="cardTitle titleWhite">
                <p>{props.title}</p>
            </div>
        </div>
    )
}
