import React from 'react';
import Paragraphe from './paragraphe/Paragraphe';


export default function Dropdown({dataNotification}){
    return(
        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" id="notification" aria-labelledby="notificationDropdown">
            <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            {
                dataNotification && dataNotification.map((data,index)=>(
                    <Paragraphe key={index} icone={data.icone} color={data.color} titre={data.titre} description={data.description}></Paragraphe>
                ))
            }
        </div>
    );
}