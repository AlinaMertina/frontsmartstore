import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Recherche from './switch/Recherche';
import Annulationcommande from './switch/Annulationcommande';
import FixeDate from './switch/FixeDate';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
import Modification from './switch/Modification';
export default function Droit({ choixDroit,choixElementDroit,dateBetween,setDateBetween,
    upData,reloadeDetaille,reload,submitRecherche,reloaddetaille
     }){
    let content;

    switch (choixDroit) {
        case 1:
            content = <Notification choix1={choixDroit} setChoix={choixElementDroit} nb1={1} nb2={2}></Notification>;
            break;
        case 2:
            content = <Recherche
            choixElementDroit={choixElementDroit}
            dateBetween={dateBetween}
            setDateBetween={setDateBetween}
            reload={reload}
            submit={submitRecherche}
            ></Recherche>;
            break;
        case 3:
                content = <FixeDate
                   data={upData}  reloadeDetaille={reloadeDetaille}
                   choixElementDroit={choixElementDroit}
                   reload={reload}></FixeDate>;
                break;
        case 5:
                content = <Modification
                data={upData} reloadeDetaille={reloadeDetaille} 
                choixElementDroit={choixElementDroit}
                ></Modification>;
                break;
        case 4:
            content = <Annulationcommande
            data={upData} reloadeDetaille={reloadeDetaille} 
            choixElementDroit={choixElementDroit}
            reload={reload}></Annulationcommande>;
            break;
        default:
            content = <Recherche
                choixElementDroit={choixElementDroit}
                dateBetween={dateBetween}
                setDateBetween={setDateBetween}
                reload={reload}
                submit={submitRecherche}
                ></Recherche>;
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