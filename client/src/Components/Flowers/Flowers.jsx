import React from 'react'
import Grid from '../Grid/Grid.jsx';
import Navbar from "../Navbar/Navbar.jsx"
import { useDispatch } from "react-redux"
import * as types from "../../Actions/types.js"

export default function Flowers() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: types.GET_FLOWERS
        })
    })
    
    return (
        <div>
            <Navbar />
            <Grid title="Flowers" />
        </div>
    )
}
