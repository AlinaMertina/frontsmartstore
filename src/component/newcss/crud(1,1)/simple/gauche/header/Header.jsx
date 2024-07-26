import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import config from '../../../../../../config/config';
import axios from 'axios';
export default function Header({mot,
                    handlerRechercheSimple,SubmitRechercheSimple,choixElementDroit}){
                    
    const notification = JSON.parse(localStorage.getItem('notification')) || {};

    return(
        <>
        <nav class="navbar col-lg-12 col-12 p-0 d-flex flex-row navgauche" >
                
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end col-lg-12 p-0 mb-0" style={styles.backgroundColorGauche}>
                    <ul class="navbar-nav mr-lg-2">
                        <li class="nav-item nav-search d-none d-lg-block">
                            <div class="input-group">
                            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <button class="input-group-text" id="search" onClick={SubmitRechercheSimple}>
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control" id="navbar-search-input" placeholder={mot==='null' ? 'mot a rechercher' : word}   onChange={handlerRechercheSimple} aria-label="recherche" aria-describedby="search"/>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-nav-right " >
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown" onClick={()=>{choixElementDroit(1)}}>
                                <i class="icon-bell mx-0"></i>
                                <span class="count" style={notification=='null' ? null:  {backgroundColor:'#DD2D4A'}}></span>
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
        </>
    );

}