import React  from 'react';
import Header from '../../../crud(1,1)/simple/gauche/header/Header'
import Table from './table/Table';
import Ajout from './ajout/Ajout';
export default function Gauche({choixGauche,setChoixGauche,
        mot,handlerRechercheSimple,SubmitRechercheSimple,choixElementDroit,
        data,setUpaDataChoix,precedent,suivant,
        listefamille,listetva,listetypegestion,upData,listeunitee,choixElementGauchePF}){
        let content;
        switch (choixGauche) {
            case 1:
                content = 
                    <Table
                        setUpaDataChoix={setUpaDataChoix}
                        modificationValue={setUpaDataChoix}
                        data={data}
                        suivant={suivant}
                        precedent={precedent}
                        setChoixGauche={setChoixGauche}
                        listeunitee={listeunitee}
                        choixElementGauchePF={choixElementGauchePF}
                        
                    ></Table>;
                break;
            case 2:
                content = <Ajout listefamille={listefamille} listetva={listetva} 
                listetypegestion={listetypegestion} listeunitee={listeunitee} 
                choixElementGauchePF={choixElementGauchePF}></Ajout>;
                break;
            case 3:
                content =<Ajout listefamille={listefamille} listetva={listetva} 
                listetypegestion={listetypegestion} upData={upData} listeunitee={listeunitee} 
                choixElementGauchePF={choixElementGauchePF}></Ajout>;
                break;
            default:
                content =<Table
                    setUpaDataChoix={setUpaDataChoix}
                    modificationValue={setUpaDataChoix}
                    data={data}
                    suivant={suivant}
                    precedent={precedent}
                    setChoixGauche={setChoixGauche}
                    choixElementGauchePF={choixElementGauchePF}
                ></Table>;
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

