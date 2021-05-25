import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <div id="firstDiv">
            &nbsp;
            <br/>
            <footer>
                Copyright&nbsp;2021
                <Link to="/about"> About Us</Link> &nbsp;
                <Link to="/contact"> Contact Us</Link> &nbsp;
            </footer>
        </div>
    )
}

export default Footer
