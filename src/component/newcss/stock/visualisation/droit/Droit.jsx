import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
import Choixmagasin from './switch/Choixmagasin';
import Recherche from './switch/Rercherche';

export default function Droit({choixDroit,setChoixDroit,
    dataRecherche,setDataRecherche,realodRecherche,doRecherche,
    suivant,precedent,listecolonne,setColonneaffiche
    }){
        let content;
        switch (choixDroit) {
            case 1:
                content = <Notification  setChoix={setChoixDroit}></Notification>;
                break;
            case 2:
                content = <Recherche
                dataRecherche={dataRecherche}
                setDataRecherche={setDataRecherche}
                realodRecherche={realodRecherche}
                doRecherche={doRecherche}
                ></Recherche>;
                break;
            case 3:
                content = <Choixmagasin
                    suivant={suivant}
                    precedent={precedent}
                    listecolonne={listecolonne}
                    setColonneaffiche={setColonneaffiche}></Choixmagasin>;
                break;
            default:
                content = <Notification  setChoix={setChoixDroit}></Notification>;
                break;
        }
        return(
            <>
                <div class="col-3 corps2">
                    <Header></Header>
                    <div class="row justify-content-between" > 
                        {content}
                    </div>
                </div>
            </>
        );
}
