
import React from 'react';
import LiCollaps from './liCollaps/LiCollaps';
import styles from '../../datajson/style/style';

export default function  SidebarVerticale({dataMenuVerticale}){
    return (
       
        <nav class="sidebar sidebar-offcanvas" id="sidebar" style={styles.backgroundColorGauche}>
            <ul class="nav">
                {dataMenuVerticale && dataMenuVerticale.map((data,index)=>(
                    // <></>
                    <LiCollaps key={index} icone={data.icone}nom={data.nom}lien={data.lien} dataliste={data.dataliste}></LiCollaps>
                ))
                }
            </ul>
        </nav>
       
    );
}