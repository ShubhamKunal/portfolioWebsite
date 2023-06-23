import React from 'react'

export const Projects = () => {
  return (
    <div className="container" style={{padding:'20px'}}>
    <h2 style={{fontFamily:'Pacifico'}}><u><i>Some</i></u> note-worthy Projects <span role="img" aria-label="">&#129325;</span></h2>
    <br/>
    <table>
      <tr>
        <th width="60%"> 
          MERN stack
        </th>
        <td width="40%">
          Google disk clone -
           {" "}
           <a href="https://fileupload-kunal.netlify.app">
            <b>backupizer</b>
          </a>{" "}
           <a href="https://github.com/ShubhamKunal/backupizer">
            <b>Github</b>
          </a>
        </td>
      </tr>
      <br />
      <tr>
        <th>
          MERN stack
          <br />
          
        </th>

        <td>
          To-do note keeper -{" "}
          <a href="https://todo-kunal.netlify.app">
            <b>todoList</b>
          </a>{" "}
          <a href="https://github.com/ShubhamKunal/todoList">
            <b>Github</b>
          </a>
        </td>
      </tr>
      <br />
      <tr>
        <th>
          Flutter
        </th>

        <td>
          My Notes app designed with Flutter - {" "}
          <a href="https://github.com/ShubhamKunal/My-Notes">
            <b>My-Notes</b>
          </a>
        </td>
      </tr>
    </table>
  </div>
  )
}
