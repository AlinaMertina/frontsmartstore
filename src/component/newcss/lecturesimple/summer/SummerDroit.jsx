import React, { useEffect, useRef,useState }  from 'react';
import Header from '../../crudutilisateur/corpsdroit/header/Header';
import Notification from '../../crudutilisateur/corpsdroit/switch/Notification';
import Recherche from './switch/Recherche';
import Summer from './switch/summer/Summer';
export default function SummerDroit({choix,setMot,mot,setChoix,doSearch,setChoixlecture,data,pagelecture}){
    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={2} nb2={3}></Notification>;
            break;
        case 2:
            content = <Recherche setMot={setMot} mot={mot} choix1={choix} setChoix={setChoix} doSearch={doSearch} ></Recherche>
            break;
        case 3:
            content = <Summer data={data} choix1={choix} setChoix={setChoix} setChoixlecture={setChoixlecture} pagelecture={pagelecture}></Summer>
            break;
    }
    return(
        <>
            <div class="col-3 corps2">
                <Header setChoix={setChoix} ></Header>
                <div class="row justify-content-between" > 
                    {content}
                </div>
            </div>
        </>
    );
}