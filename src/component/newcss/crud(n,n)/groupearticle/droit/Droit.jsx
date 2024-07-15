import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Recherche from './switch/Recherche';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
export default function Droit({choix,setChoix, 
    mot,handlerRechercheSimple,choixElementDroitPF,reload,
    listefamille,famillearticleChoix,setIdfamillearticle,SudmitRecherche}){
    // nb1={1} nb2={1}
    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={1} nb2={2}></Notification>;
            break;
        case 2:
            content = <Recherche 
             mot={mot} handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF}
             reload={reload} listefamille={listefamille} famillearticleChoix={famillearticleChoix}
             setIdfamillearticle={setIdfamillearticle} SudmitRecherche={SudmitRecherche} ></Recherche>;
            break;
        default:
            content =<Recherche 
            mot={mot} handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF}
            reload={reload} listefamille={listefamille} famillearticleChoix={famillearticleChoix}
            setIdfamillearticle={setIdfamillearticle} SudmitRecherche={SudmitRecherche} ></Recherche>;
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