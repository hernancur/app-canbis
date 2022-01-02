import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../Actions/actions.js"
import "../Grid/grid.scss"
import Card from '../Grid/Card/Card.jsx';

export default function Flowers() {
    const flowers = useSelector((state) => state.flowers)

    const dispatch = useDispatch();

    React.useEffect(() => {
        !flowers.length && dispatch(actions.getFlowers())
    }, [dispatch])
    
    
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="grid">
                    {
                        flowers.map((card, i) => {
                            return <Card title={card.name.split(" - ")[0]} image={card.image} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
