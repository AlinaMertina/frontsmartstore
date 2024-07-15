import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Ajout from './switch/Ajout';
import Modification from './switch/Modification';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
import Recherche from './switch/Rercherche';

export default function Droit({
    choix,setChoix,
    lien,choixElementDroitPF,reload,
    mot,handlerRechercheSimple,SubmitRechercheSimple,
    updata,setUpdata,formaData,colonne
}){
    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={2} nb2={3}></Notification>;
            break;
        case 2:
            content = <Ajout lien={lien} choixElementDroitPF={choixElementDroitPF} reload={reload}
            formaData={formaData} colonne={colonne}></Ajout>;
            break;
        case 3:
            content =<Recherche mot={mot} handlerRechercheSimple={handlerRechercheSimple} SubmitRechercheSimple={SubmitRechercheSimple}
            choixElementDroitPF={choixElementDroitPF} reload={reload}></Recherche> ;
            break;
        case 4:
                content = <Modification updata={updata} setUpdata={setUpdata} lien={lien}
                choixElementDroitPF={choixElementDroitPF} reload={reload}  colonne={colonne}></Modification>
                break;
        default:
            content =<Recherche mot={mot} handlerRechercheSimple={handlerRechercheSimple} SubmitRechercheSimple={SubmitRechercheSimple}
            choixElementDroitPF={choixElementDroitPF} reload={reload}></Recherche> ;
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