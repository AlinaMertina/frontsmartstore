import React from 'react';

export default function Icone(){
    return(
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="##" data-toggle="dropdown">
            <i  className="icon-bell mx-0"></i>
            <span  className="count"></span>
        </a>
    );
}