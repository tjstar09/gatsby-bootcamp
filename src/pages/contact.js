import React from "react"
import Layout from '../Components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h2 id="firstPara">Contact Us @</h2>
      <ul>
        <li>
          <a href="mailto:tjstar09@gmail.com" target="_blank" className="tanmay">
            Tanmay Jain - tjstar09@gmail.com
        </a>
        </li>
<br />
        <li>
          <b>Follow me on Twitter -- </b>
          <a href="https://www.twitter.com/tjstar09" target="_blank" className="tanmay">
            @tjstar09
          </a>
        </li>
<br />
        <li>
          <a href="mailto:kaka@papa.com" target="_blank" className="kaka">
            Kaka Papa - kaka@papa.com
          </a>
        </li>
<br />
        <li>
          <a href="mailto:mama@baba.com" target="_blank" className="mama">
            Mama Baba - mama@baba.com
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
