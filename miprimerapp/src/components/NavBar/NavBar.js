import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';

//Arrow Function
const NavBar = () => {

    return (
        <div className="NavBar">
        <div>
           <Link to="/dashboard">dashboard</Link>
        </div>
    
        <div>
        <Link to="/store">store</Link>
        </div>
        <div>
        <Link to="/styles">Styles</Link>
        </div>
        <div>
        <Link to="/Reviews">Reviews</Link>
        </div>
        </div>
    );
}
export default NavBar;