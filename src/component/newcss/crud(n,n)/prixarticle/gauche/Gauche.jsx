import React  from 'react';
import Header from '../../../crud(1,1)/simple/gauche/header/Header';
import Table from './table/Table';
export default function Gauche({choixElementDroit,data,setData,choix,idselect,
neutre,mot}){

    return(
        <>
            <div class="col-9 corps1">
                <Header mot={mot} handlerRechercheSimple={neutre}
                    SubmitRechercheSimple={neutre}
                   choixElementDroit={choixElementDroit}
                    > </Header>
                <Table
                    data={data} setData={setData} choix={choix} idselect={idselect}>
                </Table>
            </div>
        </>
    );

}
