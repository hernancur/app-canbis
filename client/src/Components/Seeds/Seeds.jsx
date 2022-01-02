import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import "./seeds.scss"
import * as actions from "../../Actions/actions.js"
import { useDispatch, useSelector } from "react-redux"
import "../Grid/grid.scss"
import Card from '../Grid/Card/Card.jsx';

export default function Seeds() {
    const companies = useSelector((state) => state.seedCompanies)

    const dispatch = useDispatch();

    React.useEffect(() => {
        !companies.length && dispatch(actions.getSeedCompanies())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="grid">
                    {
                        companies.map((card, i) => {
                            return <Card title={card.name.split(" - ")[0]} image={card.image} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
