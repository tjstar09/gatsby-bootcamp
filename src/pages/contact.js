import React from "react"
import { Link } from "gatsby"
import Footer from '../Components/Footer.js'
import Header from '../Components/Header.js'

const ContactPage = () => {
  return (
    <div id="firstDiv">
      {" "}
      <Header/>
      <h2 id="firstPara">Contact Us @</h2>
      <div>
        <a href="mailto:tjstar09@gmail.com" target="_blank" className="tanmay">
          Tanmay Jain - tjstar09@gmail.com
        </a>
        <br />
        <a href="https://www.twitter.com/tjstar09" target="_blank" className="tanmay">
          Tanmay Jain - @tjstar09
        </a>
        <br />
        <a href="mailto:kaka@papa.com" target="_blank" className="kaka">
          Kaka Papa - kaka@papa.com
        </a>
        <br />
        <a href="mailto:mama@baba.com" target="_blank" className="mama">
          Mama Baba - mama@baba.com
        </a>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactPage
