import React from "react"
import { Link } from "gatsby"
import { links } from './header.module.scss'

const Header = () => {
    return (
        <div id="header">
            <h1> <b>Welcome To the Great Gatsby</b></h1>
            <nav>
                <Link className = { links } to="/"> Home </Link>&nbsp;|&nbsp;
                <b><Link to="/blog"> Blog </Link>&nbsp;|&nbsp;</b>
                <b><Link to="/about"> About Us </Link>&nbsp;|&nbsp;</b>
                <b><Link className = { links } to="/contact"> Contact Us </Link>&nbsp;</b>
            </nav>
            &nbsp;
            <br />
        </div>
    )
}

export default Header
