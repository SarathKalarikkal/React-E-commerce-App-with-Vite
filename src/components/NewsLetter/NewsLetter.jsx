import React from 'react'
import "./NewsLetter.css"


const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusve Offer on Your Email</h1>
      <p>Subscribe to our newsLetter and stay updated</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
