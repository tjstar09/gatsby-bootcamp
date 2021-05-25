import React from "react"
import Footer from '../Components/Footer.js'
import Header from '../Components/Header.js'

const BlogPage = () => {
  return (
    <div id="firstDiv">
      {" "}
      <Header/>
      <h2 id="firstPara">Gatsby Says</h2>
      <h3>Hello my dear friend, I am the Great Gatsby.</h3>
      <Footer/>
    </div>
  )
}

export default BlogPage
