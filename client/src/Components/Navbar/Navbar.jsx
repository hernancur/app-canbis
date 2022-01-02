import React from 'react'
import "./navbar.scss"
import { Search } from "@mui/icons-material"
import RocketIcon from "@mui/icons-material/Rocket"
import { Link } from "react-router-dom"


export default function Navbar() {
        
    const [Scroll, setScroll] = React.useState(false);

    window.onscroll = () => {
        console.log(window.pageYOffset)
        setScroll(window.pageYOffset === 0 ? false : true);
        console.log(Scroll)
        return () => window.onscroll = null;
    }


    return (
        <div className={ Scroll ? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <div className="brand">
                        <RocketIcon className="icon"/>
                        <h1>Getfly</h1>
                    </div>
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <Link to="/seed-companies" className="link">
                        <span>Seed Companies</span>
                    </Link>
                    <Link to="/strains" className="link">
                        <span>Strains</span>
                    </Link>
                    <Link to="/flowers" className="link">
                        <span>Flowers</span>
                    </Link>
                </div>
                <div className="right">
                    <Search className="icons"/>
                    <input type="text" className={ Scroll ? "searchBar scrolled" : "searchBar" }/>
                    <Link to="/favorites" className="link">
                        <span>Favorites</span>
                    </Link>
                </div>
            </div>  
        </div>
    )
}

