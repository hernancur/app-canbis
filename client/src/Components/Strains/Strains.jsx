import React from 'react'
import Grid from '../Grid/Grid.jsx'
import Navbar from "../Navbar/Navbar.jsx"
import * as types from "../../Actions/types.js"

export default function Strains() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: types.GET_STRAINS
        })
    })

    return (
        <div>
            <Navbar />
            <Grid title="Strains"/>
        </div>
    )
}
