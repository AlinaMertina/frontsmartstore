import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
export default function Header({setChoix}){
   
   const user = JSON.parse(localStorage.getItem('user')) || {};
   const { login, nomrole,image } = user;
    return(
        <>
            <header class="header">
                <img src={image} alt="User Image" class="imageuser"/>
                <div class="user-info">
                    <h5 class="user-post">{login}</h5>
                    <p class="user-name" style={styles.titreGris}>{nomrole}</p>
                </div>
                <div class="icon-container"  style={styles.backgroundColorDroit}>
                    <i class="ti-power-off text-primary"style={styles.sizeIcone} ></i>
                </div>
            </header>
        </>
    );
}
