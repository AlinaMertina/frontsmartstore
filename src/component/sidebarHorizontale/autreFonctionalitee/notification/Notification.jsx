import React from 'react';
import Icone from './icone/Icone';
import Paragraphe from './dropdown/paragraphe/Paragraphe';

export default function Notification({dataNotification}){
    return(
       <li class="nav-item dropdown">
            <Icone></Icone>
            <Paragraphe dataNotification={dataNotification}></Paragraphe>
       </li>
    );
}

