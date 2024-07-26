import React  from 'react';
import Header from './header/Header';
import Table from './table/Table';
export default function Gauche({mot,handlerRechercheSimple,SubmitRechercheSimple,choixElementDroit,
    name,modificationValue,data,suivant,precedent,colonne,detaille}){
    return(
        <>
            <div class="col-9 corps1">
                <Header 
                   mot={mot}
                   handlerRechercheSimple={handlerRechercheSimple}
                   SubmitRechercheSimple={SubmitRechercheSimple}
                   choixElementDroit={choixElementDroit}
                    > </Header>
                <Table
                   name={name}
                   modificationValue={modificationValue}
                   data={data}
                   suivant={suivant}
                   precedent={precedent}
                   colonne={colonne}
                   detaille={detaille}
                ></Table>
            </div>
        </>
    );
}
