import React from 'react';

export default function Liactive({lien,nom,active}){
    return(
        <li className={`nav-item nav-search d-none d-lg-block linknavh ${active ?  'activelinknavh' : ''}`}>
        <a href={lien}>{nom}</a>
      </li>
      
        
    );
}