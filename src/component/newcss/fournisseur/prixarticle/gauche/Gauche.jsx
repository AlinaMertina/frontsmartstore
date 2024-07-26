import React  from 'react';
import Header from '../../../crud(1,1)/simple/gauche/header/Header';
import Table from './table/Table';
import Ajout from './ajout/Table';
export default function Gauche({listeprixFournisseur,modificationPrixinividuelle,
updata,setUpdata,choixGauche,choixElementDroit,nomfournisseur,choixElementGauchePF,getData,setChoixGauche}){
    const neutre= async () => {
        
    };
    let content;
    switch (choixGauche) {
        case 1:
            content = 
                <Table
                   data={listeprixFournisseur}
                   modificationValue={modificationPrixinividuelle}
                   choixElementGauchePF={choixElementGauchePF}
                   nomfournisseur={nomfournisseur}
                ></Table>;
            break;
        case 2:
            content = <Ajout data={updata} setData={setUpdata}  nomfournisseur={nomfournisseur} choixElementGauchePF={choixElementGauchePF} getData={getData} setChoixGauche={setChoixGauche} ></Ajout>;
            break;
        default:
            content = 
                <Table
                   data={listeprixFournisseur}
                   modificationValue={modificationPrixinividuelle}
                   choixElementGauchePF={choixElementGauchePF}
                   nomfournisseur={nomfournisseur}
                ></Table>;
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