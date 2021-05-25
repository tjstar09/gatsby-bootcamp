import React from 'react'
import Footer from '../Components/Footer.js'
import Header from '../Components/Header.js'
import * as styles from './layout.module.scss'

console.log(styles)
console.log(styles.containers)

const Layout = (props) => {
    return (
        <div className = { styles.containers } id="layout">
            <Header />
            {props.children}
            <Footer />
        </div> 
    )
}

export default Layout;