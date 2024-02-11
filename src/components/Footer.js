import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
      <div className='footer'>
        <ul>
            <li>contact us :
               <br /> <i className="fa fa-linkedin-square">&nbsp;<a href="/">linkedin</a></i>
               <br /> <i className="fa fa-youtube-square">&nbsp;<a href="/">youtube</a></i>
               <br /> <i className="fa fa-github-square">&nbsp;<a href="/">github</a></i>
               </li>
            <li>created by :
              <br /><pre>Aditya chaudhary</pre>
            </li>
            <li>copyright@2023</li>
        </ul>
      </div>
    </>
  )
}

export default Footer

