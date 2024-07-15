import React from 'react';
import Notification from './notification/Notification';
import ImageRondeLikeIcone from './compteUtilisateur/imageRondLikeIcone/ImageRondeLikeIcone';

export default function AutreFonctionalitee({imageuser,dataNotification}){
    return(
        <ul class="navbar-nav navbar-nav-right">
           <Notification dataNotification={dataNotification}></Notification>
            <ImageRondeLikeIcone image={imageuser}></ImageRondeLikeIcone>
        </ul>
    );
}
