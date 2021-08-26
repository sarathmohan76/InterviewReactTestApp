import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
export default function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul >
        {props?.navItem?.map((item,index) => {
          return (
            <li key={index}>
              <Link to={item.path} >{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
