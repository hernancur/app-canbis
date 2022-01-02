import React from 'react'
import Grid from '../Grid/Grid.jsx'
import Navbar from "../Navbar/Navbar.jsx"
import * as actions from "../../Actions/actions.js"
import { useDispatch, useSelector } from "react-redux"

export default function Strains() {
    const strains = useSelector((state) => state.strains)

    const dispatch = useDispatch();

    React.useEffect(() => {
        !strains.length && dispatch(actions.getStrains())
    }, [dispatch])


    return (
        <div>
            <Navbar />
            <h1>WORK IN PROGRESS</h1>
        </div>
    )
}
