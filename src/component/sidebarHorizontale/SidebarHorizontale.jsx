import React from 'react';
import Logo from './logo/Logo';
import UlHorizontal from './ulHorizontal/UlHorizontal';
import AutreFonctionalitee from './autreFonctionalitee/AutreFonctionalitee';
import SpanIcone from './spanIcone/SpanIcone';

export default function SidebarHorizontale({datalogo,dataUlHorizontal,name,datanotification,infouser}){
    return(
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <Logo min={datalogo.min} max={datalogo.max}></Logo>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <SpanIcone icone={'icon-menu'} ></SpanIcone>
                {/* <UlHorizontal dataMenuHorizontal={dataUlHorizontal} nameactive={name}></UlHorizontal> */}
                <AutreFonctionalitee dataNotification={datanotification} imageuser={infouser.image}></AutreFonctionalitee>
            </div>
        </nav>
    );
}