import React from 'react'
import Grid from '../Grid/Grid.jsx'
import Navbar from "../Navbar/Navbar.jsx"
import * as types from "../../Actions/types.js"

export default function Seeds() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: types.GET_SEED_COMPANIES
        })
    })

    return (
        <div>
            <Navbar />
            <Grid title="Seeds"/>
        </div>
    )
}
