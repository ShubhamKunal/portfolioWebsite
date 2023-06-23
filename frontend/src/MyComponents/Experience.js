import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="container" style={{padding:'20px'}}>
      <h2 style={{fontFamily:'Pacifico'}}>Experience <span role="img" aria-label="">&#128535;</span></h2>
      <br/>
      <table>
        <tr>
          <th width="70%">
            Associate Software Engineer
            <br />
              Feb 2023 - Now
          </th>

          <td width="30%">
            Worked extensively with Flutter, Node, Express, AWS.
            <br />
            At{" "}
            <a href="http://www.hashkraft.com/">
              <b>Hashkraft Inc</b>
            </a>
          </td>
        </tr>
        <br />
        <tr>
        
          <th width="70%">
            Project Intern
            <br />
            Mar 2022 - July 2022
          </th>

          <td width="30%">
            An eye tracker developed using Python for collection of additional
            data for further research. Computer vision and machine learning APIs
            were used extensively.
            <br />
            At{" "}
            <a href="https://fict.itmo.ru/">
              <b>Faculty of Infocommunications Technologies</b>
            </a>
            , ITMO University
          </td>
        </tr>
        <br />
        <tr>
          <th>
            Project Intern
            <br />
            May 2021 - June 2021
          </th>

          <td>
            A Scheduler developed using Spring boot development at the backend
            and Vue.js at the frontend.
            <br />
            At{" "}
            <a href="https://fict.itmo.ru/">
              <b>Faculty of Infocommunications Technologies</b>
            </a>
            , ITMO University
          </td>
        </tr>
        <br />
        <tr>
          <th width="70%">
            Project Intern
            <br />
            Dec 2020 - Feb 2021
          </th>

          <td width="30%">
            A cross platform music player developed using Flutter
            <br />
            At{" "}
            <a href="https://fict.itmo.ru/">
              <b>Faculty of Infocommunications Technologies</b>
            </a>
            , ITMO University
          </td>
        </tr>
        <br />
               
      </table>
    </div>
  );
};
