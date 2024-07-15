import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';

export default function Header({setMot,mot,setChoix,doRecherche}){
    const [word, setWord] = useState(mot);
    const handle=(e)=>{
        console.log(e.target.value);
        setMot(e.target.value);
        setWord(e.target.value);
    }
    const notification=()=>{
       setChoix(1);
    }
    return(
        <>
        <nav class="navbar col-lg-12 col-12 p-0 d-flex flex-row navgauche" >
                
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end col-lg-12 p-0 mb-0" style={styles.backgroundColorGauche}>
                    <ul class="navbar-nav mr-lg-2">
                        <li class="nav-item nav-search d-none d-lg-block">
                            <div class="input-group">
                            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <button class="input-group-text" id="search" onClick={doRecherche}>
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control" id="navbar-search-input" placeholder={word==='null' ? 'mot a rechercher' : word}   onChange={handle} aria-label="recherche" aria-describedby="search"/>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-nav-right " >
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown" onClick={notification}>
                                <i class="icon-bell mx-0"></i>
                                <span class="count"></span>
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
        </>
    );
}