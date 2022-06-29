import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera,faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

export const Sidenav = () => (

    <div className="sidenav">
        <div className='icon-setting'>
          <div className="main-logo">
            <span className="small-crl-one"></span>  
            <span className="small-crl-two"></span>  
            <span className="small-crl-three"></span>  
          </div>
         <NavLink as={Link} to="/createvideo" className="icon-grid mt-5"><FontAwesomeIcon icon={faVideoCamera} /></NavLink>
         <NavLink as={Link} to="/home" className="icon-grid"><FontAwesomeIcon icon={faCirclePlay} /></NavLink>
         <NavLink as={Link} to="/dashboard"><img src="./assets/user.png" className="profile_menu" alt="user"></img></NavLink>
        </div>
    </div>
)