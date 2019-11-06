import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
    return ( 
        <div className={classes.Navbar}>
            <nav>
                <h1 className={classes.logo}>Offices</h1>
                <ul>
                    <li><NavLink to='/' activeClassName={classes.active} exact={true}> List </NavLink> </li>
                    <li><NavLink to='/grid' activeClassName={classes.active} > Grid </NavLink> </li>
                    <li><NavLink to='/map' activeClassName={classes.active} > Map </NavLink></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;