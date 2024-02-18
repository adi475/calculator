import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
      <div className='footer'>
        <ul>
            <li>contact us :
               <br /> <i className="fa fa-linkedin-square">&nbsp;<a href="https://linkedin.com/in/aditya-chaudhary-6509a845">linkedin</a></i>
               <br /> <i className="fa fa-youtube-square">&nbsp;<a href="/">youtube</a></i>
               <br /> <i className="fa fa-github-square">&nbsp;<a href="https://github.com/adi475">github</a></i>
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

