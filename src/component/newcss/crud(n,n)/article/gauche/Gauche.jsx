import React  from 'react';
import Header from '../../../crud(1,1)/simple/gauche/header/Header';
import Table from './switch/table/Table';
import Ajout from './switch/ajout/Ajout';
export default function Gauche({
    mot,handlerRechercheSimple,SubmitRechercheSimple,choixElementDroit,
    choixGauche,data,setUpaData,listecolonne,precedent,suivant,choixElementGauchePF,upData,
    listegroupe_article,colonne,listeunitee,setChoixGauche}){
    let content;
    switch (choixGauche) {
        case 1:
            content = 
                <Table
                    
                data={data}
                setUpaData={setUpaData}
                listecolonne={listecolonne}
                precedent={precedent}
                suivant={suivant}
                choixElementGauchePF={choixElementGauchePF}
                colonne={colonne}
                setChoixGauche={setChoixGauche}
                    // setUpaDataChoix={setUpaData}
                    // modificationValue={setUpaDataChoix}
                    // data={data}
                    // suivant={suivant}
                    // precedent={precedent}
                    // setChoixGauche={setChoixGauche}
                    // listeunitee={listeunitee}
                    // choixElementGauchePF={choixElementGauchePF}
                    
                ></Table>;
            break;
        case 2:
            content = <Ajout listegroupe_article={listegroupe_article}
            choixElementGauchePF={choixElementGauchePF}  listeunitee={listeunitee}></Ajout>;
            break;
        case 3:
            content =<Ajout upData={upData} listegroupe_article={listegroupe_article}
            choixElementGauchePF={choixElementGauchePF} listeunitee={listeunitee}></Ajout>;
            break;
        default:
            content = <Table     
            data={data}
            setUpaData={setUpaData}
            listecolonne={listecolonne}
            precedent={precedent}
            suivant={suivant}
            choixElementGauchePF={choixElementGauchePF}

                // setUpaDataChoix={setUpaData}
                // modificationValue={setUpaDataChoix}
                // data={data}
                // suivant={suivant}
                // precedent={precedent}
                // setChoixGauche={setChoixGauche}
                // listeunitee={listeunitee}
                // choixElementGauchePF={choixElementGauchePF}
                
            ></Table>;;
            break;
    }
return(
    <>
        <div class="col-9 corps1">
            <Header 
               mot={mot}
               handlerRechercheSimple={handlerRechercheSimple}
               SubmitRechercheSimple={SubmitRechercheSimple}
               choixElementDroit={choixElementDroit}
                > </Header>
            {content}
        </div>
    </>
);
}

