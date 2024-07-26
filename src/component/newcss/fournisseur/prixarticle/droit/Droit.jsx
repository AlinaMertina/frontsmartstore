import React  from 'react';
import Recherche from './switch/Recherche';
import Modification from './switch/Modification';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
import Recherchefournisseur from './switch/Recherchefournisseur';

export default function Droit({choix,listeArticle,setIdArticle,choixDroitPF,setChoixDRoit,
   updata,fModificationValuePrix,reload,
   listfournisseur,setIdFournisseur,submit,setChoixGaucheData  }){
    let content;
    switch (choix) {
        case 4:
            content = <Recherchefournisseur listfournisseur={listfournisseur} setIdFournisseur={setIdFournisseur} submit={submit} choixDroitPF={choixDroitPF}></Recherchefournisseur>;
            break;
        case 1:
            content = <Notification choix1={choix} setChoix={setChoixDRoit} nb1={2} nb2={3} ></Notification>;
            break;
        case 3:
            content = <Modification data={updata} fModificationValuePrix={fModificationValuePrix} reload={reload} choixDroitPF={choixDroitPF} setChoixGaucheData={setChoixGaucheData}> </Modification>;
            break;
        case 2:
                content = <Recherche listArticle={listeArticle}  setIdArticle={setIdArticle} choixDroitPF={choixDroitPF}> </Recherche>;
                break;
        default:
            content = <Notification choix1={choix} setChoix={setChoixDRoit} nb1={2} nb2={3}></Notification>;
            break;
    }
    return(
        <>
            <div class="col-3 corps2">
                <Header setChoix={setChoixDRoit} ></Header>
                <div class="row justify-content-between" > 
                    {content}
                </div>
            </div>
        </>
    );
}