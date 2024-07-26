import React from "react";
import Header from "../../../crud(1,1)/simple/gauche/header/Header";
import Total from "./total/Total";
import Stockmagasin from "./stockmagasin/Stockmagasin";
import styles from "../../../../../datajson/style/style";

export default function Gauche({choixGauche,
    data,suivant,precedent,choixElementGauche,choixElementDroit,
    listemagasinprint
}){
    const neutre= async () => {
    
    };
    let content;
        switch (choixGauche) {
            case 1:
                content = <Total
                    data={data} 
                    suivant={suivant}
                    precedent={precedent}
                    choixElementGauche={choixElementGauche}
                    >
                </Total>
                
                   
                break;
            case 2:
                content = <Stockmagasin
                    data={data}
                    suivant={suivant}
                    precedent={precedent}
                    choixElementGauche={choixElementGauche}
                    listemagasinprint={listemagasinprint}
                >
                </Stockmagasin>
                break;
          
            default:
                content = <Total
                data={data} 
                suivant={suivant}
                precedent={precedent}
                choixElementGauche={choixElementGauche}
                >
                </Total>
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