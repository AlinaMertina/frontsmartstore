import React from "react";
import Header from "../../../crud(1,1)/simple/gauche/header/Header";
import ListeCommande from '../gauche/switch/listecommande/ListeCommande';
import DetailleCommande from './switch/detaillecommande/DetailleCommande';
export default function Gauche({choixGauche,dataListecommande,suivant,precedent,voirDetaille,
        dataDetailleCommande,setFixeDate,setAnulation,choixElementGauchePF,numboncommande,choixElementDroit}){
        const neutre= async () => {
    
        };
        let content;
        switch (choixGauche) {
            case 1:
                content = 
                    <ListeCommande
                        data={dataListecommande}
                        suivant={suivant}
                        precedent={precedent}
                        voirDetaille={voirDetaille}
                        choixElementGauchePF={choixElementGauchePF}></ListeCommande>;
                break;
            case 2:
                content = <DetailleCommande
                    data={dataDetailleCommande}
                    dataFixeDate={setFixeDate}
                    dataAnulation={setAnulation}
                    choixElementGauchePF={choixElementGauchePF}
                    numboncommande={numboncommande}
                    ></DetailleCommande>;
                break;
            default:
                content = 
                <ListeCommande
                        data={dataListecommande}
                        suivant={suivant}
                        precedent={precedent}
                        voirDetaille={voirDetaille}
                        choixElementGauchePF={choixElementGauchePF}></ListeCommande>;
                break;
        }
        return(
            <>
                <div class="col-9 corps1">
                    <Header 
                       mot={'null'}
                       handlerRechercheSimple={neutre}
                       SubmitRechercheSimple={neutre}
                       choixElementDroit={choixElementDroit}
                        > </Header>
                    {content}
                </div>
            </>
        );
}