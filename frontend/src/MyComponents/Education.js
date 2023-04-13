import React from 'react'

export const Education = () => {
  return (
    <div className='container'>
      <h4>Education</h4>
      <table>
        <tr>
          <th>University:</th>
          <td><a href='https://en.itmo.ru/'><img height="50px" src="ITMO_University_official_logo_horizontal.png" alt='ITMO_LOGO'></img></a><br/> Saint Petersburg, Russian Federation</td>
        </tr><br/>
        <tr>
        </tr>
        <tr>
        <th>Schools</th>
          <td rowSpan="3">
            <a href="http://www.denobilicmri.in/">De Nobili School, C.M.R.I, Dhanbad, India</a><br/>
            <a href="https://srichaitanya.net/">Sri Chaitanya, Visakhapatnam, India </a><br/>
            <a href="https://davnitjsr.org/">D.A.V Public School, Jamshedpur, India </a><br/>
          </td>
        </tr>
      </table>
    </div>
  )
}
