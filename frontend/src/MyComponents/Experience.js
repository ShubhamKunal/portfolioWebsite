import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="container">
      <h4>Experience</h4>
      <table>
        <tr>
          <th width="70%">
            Associate Software Engineer
            <br />
            2023-now
          </th>

          <td width="30%">
            Worked extensively with Flutter, Node, Express, AWS EC2.
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
            2021-2022
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
            2021-2021
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
            2020-2021
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
