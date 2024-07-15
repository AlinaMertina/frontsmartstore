import React from 'react';
import config  from '../../../../../config/config';
export default function ImageRondeLikeIcone({image}){

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    return(
        <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="##" data-toggle="dropdown" id="profileDropdown">
            {user && user.image ? (
                <img src={user.image} alt="profile" />
                ) : (
                <p>No profile image available</p>
                
            )}
            </a>
        </li>
    );
}

