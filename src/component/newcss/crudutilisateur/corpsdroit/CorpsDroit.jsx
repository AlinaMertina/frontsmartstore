import React  from 'react';
import Header from './header/Header';
import Ajout from './switch/Ajout';
import ModificationMotdepass from './switch/ModificationMotdepass';
import Modifcationinfouser from './switch/Modifcationinfouser';
import Notification from './switch/Notification';
import Recherche from './switch/Recherche';
export default function CorpsDroit({choix,valuemodif,lien,listerole,setMot,mot,idrole,setIdRole,setChoix,size,setData}){
    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={4} nb2={5}></Notification>;
            break;
        case 2:
            content = <ModificationMotdepass choix1={choix} setChoix={setChoix} data={valuemodif} lien={lien}></ModificationMotdepass>;
            break;
        case 3:
            content = <Modifcationinfouser choix1={choix} setChoix={setChoix}  lien={lien} listerole={listerole} data={valuemodif}></Modifcationinfouser>;
            break;
        case 4:
                content = <Ajout choix1={choix} setChoix={setChoix} lien={lien} listerole={listerole}></Ajout>;
                break;
        default:
            content = <Recherche setData={setData} lien={lien} choix1={choix} setChoix={setChoix} listerole={listerole} setMot={setMot} idrole={idrole} mot={mot} setIdRole={setIdRole} size={size}></Recherche>;
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