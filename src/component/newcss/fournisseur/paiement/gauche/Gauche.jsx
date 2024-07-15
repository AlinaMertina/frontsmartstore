import React from "react";
import Header from "../../../crud(1,1)/simple/gauche/header/Header";
import Detaillecommande from "../gauche/switch/detaillecommande/Detaillecommande";
import Fournisseurnonpayee from "./switch/fournisseur/Fournisseurnonpayee";
import Listecommande  from './switch/listecommande/Listecommande';
export default function Gauche({listefournisseurnonpayee,detailleCommandeFrns,
    listecommandeFournisseur,detailleCommandeIdcom,
    detailleCommande,
    setChoixGauche,choixGauche,setChoixDroit,
    suivant,precedent,reste}){
    const neutre= async () => {
    
    };
    let content;
        switch (choixGauche) {
            case 1:
                content = <Fournisseurnonpayee
                    data={listefournisseurnonpayee}
                    detailleCommandeFrns={detailleCommandeFrns}></Fournisseurnonpayee>
                   
                break;
            case 2:
                content = <Listecommande
                    data={listecommandeFournisseur}
                    detailleCommandeIdcom={detailleCommandeIdcom} 
                    setChoixGauche={setChoixGauche}
                    suivant={suivant}precedent={precedent}
                    ></Listecommande>
                   
                break;
            case 3:
                content = <Detaillecommande data={detailleCommande}
                    setChoixGauche={setChoixGauche}
                    datamontant={reste}
                ></Detaillecommande>
                break;
            default:
                content = <Fournisseurnonpayee
                data={listefournisseurnonpayee}
                detailleCommandeFrns={detailleCommandeFrns}></Fournisseurnonpayee>
                break;
        }
    return(
        <>
            <div class="col-9 corps1">
                <Header 
                    mot={'null'}
                    handlerRechercheSimple={neutre}
                    SubmitRechercheSimple={neutre}
                    choixElementDroit={setChoixDroit}
                    > </Header>
                {content}
            </div>
        </>
    );

}