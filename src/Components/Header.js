import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div id="firstDiv">
            <nav>
                <h1> <b>Welcome To the Great Gatsby</b></h1>
                <Link to="/about"> About Us </Link>&nbsp;
                <Link to="/contact"> Contact Us </Link>&nbsp;
                <Link to="/blog"> Blog </Link>&nbsp;
            </nav>
            &nbsp;
            <br/>
        </div>
    )
}

export default Header
