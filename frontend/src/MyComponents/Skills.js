import React from "react";
import "./Skills.css";
import { DiReact,DiDart } from "react-icons/di";
import { SiVuedotjs, SiExpress, SiSpringboot,SiMongodb,SiFlutter,SiAndroid, SiMysql,SiPostgresql, SiJavascript } from "react-icons/si";
import {FaNode,FaJava,FaPython} from "react-icons/fa";
import {FcLinux} from "react-icons/fc";

export const Skills = () => {
  return (
    <div className="container">
      <h4>Skills</h4>
      <table id="skillTable">
        <tr>
          <th>Frontend: </th>
          <td>
            <a id="skillLogo" href="https://reactjs.org/">
              <DiReact size={50} color="#13c7eb" />
            </a>
            <a id="skillLogo" href="https://vuejs.org/">
              <SiVuedotjs size={50} color="#379e4c" />
            </a>
          </td>
        </tr>
        <br />
        <tr>
          <th>Backend:</th>
          <td>
            <a id="skillLogo" href="https://nodejs.dev/en/">
              <FaNode size={50} color="green" />
            </a>
            <a id="skillLogo" href="https://expressjs.com/">
              <SiExpress size={50} color="skyblue"/>
            </a>
            <a id="skillLogo" href="https://spring.io/projects/spring-boot">
              <SiSpringboot size={40} color="green" />
            </a>
          </td>
        </tr>
        <br />
        <tr>
          <th>Databases:</th>
          <td>
            <a id="skillLogo" href="https://www.mongodb.com/">
              <SiMongodb size={50} color="green" />
            </a>
            <a id="skillLogo" href="https://www.mysql.com/">
              <SiMysql size={50} color="#4a4d14"/>
            </a>
            <a id="skillLogo" href="https://www.postgresql.org/">
              <SiPostgresql size={40} color="deepblue" />
            </a>
          </td>
        </tr>
        <br />
        <tr>
          <th>Languages:</th>
          <td>
            <a id="skillLogo" href="https://www.java.com/en/">
              <FaJava size={50} color="#c91444" />
            </a>
            <a id="skillLogo" href="https://www.python.org/">
              <FaPython size={50} color="black" />
            </a>
            <a id="skillLogo" href="https://www.javascript.com/">
              <SiJavascript size={50} color="#b4ba47" />
            </a>
            <a id="skillLogo" href="https://www.dart.dev/">
              <DiDart size={50} color="#1AA7EC" />
            </a>
          </td>
        </tr>
        <br />
        <tr>
          <th>Tools:</th>
          <td>
            <a id="skillLogo" href="https://flutter.dev/">
              <SiFlutter size={50} />
            </a>
            <a id="skillLogo" href="https://www.android.com/intl/en_in/">
              <SiAndroid size={50} color="green"/>
            </a>
            <a id="skillLogo" href="https://www.linux.org/">
              <FcLinux size={50} color="green"/>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};
