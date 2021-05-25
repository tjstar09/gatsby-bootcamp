import React from "react"
import { Link } from "gatsby"
import { links } from './footer.module.scss'

const Footer = () => {
    return (
        <div id="footer">
            &nbsp;
            <br/>
            <footer>

                Copyright&nbsp;2021
                
                <ul>

                    <li>
                    <Link className = { links } to="/about"> About Us</Link> &nbsp;
                    </li>
                    
                    <li>
                    <Link to="/contact"> Contact Us</Link> &nbsp;
                    </li>

                </ul>
            </footer>
        </div>
    )
}

export default Footer
