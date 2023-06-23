import React from 'react'
import './Education.css'
export const Education = () => {
  return (
    <div className='container' style={{padding:'20px'}}>
      <h2 style={{fontFamily:'Pacifico'}}>Education <span role="img" aria-label="">&#129299;</span></h2>
      <br/>
      <table>
        <tr>
          <th>University:</th>
          <td><a href='https://en.itmo.ru/'><img height="50px" src="ITMO_University_official_logo_horizontal.png" alt='ITMO_LOGO'></img></a><br/>&emsp;Saint Petersburg, Russian Federation</td>
        </tr><br/>
        <tr>
        </tr>
        <tr>
        <th>Schools</th>
          <td rowSpan="3">
            &emsp;<a href="http://www.denobilicmri.in/">De Nobili School, C.M.R.I, Dhanbad, India</a><br/>
            &emsp;<a href="https://srichaitanya.net/">Sri Chaitanya, Visakhapatnam, India </a><br/>
            &emsp;<a href="https://davnitjsr.org/">D.A.V Public School, Jamshedpur, India </a><br/>
          </td>
        </tr>
      </table>
    </div>
  )
}
