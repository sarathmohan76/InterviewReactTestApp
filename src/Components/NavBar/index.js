import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
export default function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul >
        {props?.navItem?.map((item) => {
          return (
            <li>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
