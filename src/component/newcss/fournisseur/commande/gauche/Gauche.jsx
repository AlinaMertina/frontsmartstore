import React from "react";
import Header from "../../../crud(1,1)/simple/gauche/header/Header";
import ListeArticle from "./switch/listearticle/ListeArticle";
import Visualisation from "./switch/visualisation/Visualisation";
export default function Gauche({choixGauche,
        listeprixarticleFrns,modificationValue,choixElementGauchePF,
        listeCommande,modificationCommande,suppressionCommande,ValidationCommande,choixElementDroit
    }){
        const neutre= async () => {
        
        };
        let content;
        switch (choixGauche) {
            case 1:
                content = 
                    <ListeArticle
                        data={listeprixarticleFrns} modificationValue={modificationValue}
                        choixElementGauchePF={choixElementGauchePF}
                    >
                    </ListeArticle>;
                break;
            case 2:
                content = <Visualisation
                    data={listeCommande} modification={modificationCommande}
                    suppression={suppressionCommande} choixElementGauchePF={choixElementGauchePF}
                    Enregistrement={ValidationCommande}></Visualisation>;
                break;
            default:
                content = 
                <ListeArticle
                    data={listeprixarticleFrns} modificationValue={modificationValue}
                    choixElementGauchePF={choixElementGauchePF}
                >
                </ListeArticle>;
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
