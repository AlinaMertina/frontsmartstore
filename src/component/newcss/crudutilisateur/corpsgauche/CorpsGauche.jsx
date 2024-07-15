import React, { useEffect, useRef,useState }  from 'react';
import Header from './header/Header';
import Table from './table/Table';
export default function CorpsGauche({setMot,size,mot,setChoix,idFoureignkey,
    lien,setvalumodif,setData,data ,dataselect}){
    return(
        <>
            <div class="col-9 corps1">
                <Header 
                    size={size}
                    setMot={setMot}
                    mot={mot}
                    idFoureignkey={idFoureignkey}
                    setData={setData}
                    setChoix={setChoix}
                    > </Header>
                <Table
                    setData={setData}
                    setChoix={setChoix}
                    lien={lien}
                    valueforeignkey={idFoureignkey}
                    size={size}
                    mot={mot}
                    setValuemodif={setvalumodif}
                    data={data}
                    dataselect={dataselect}
                ></Table>
            </div>
        </>
    );
}