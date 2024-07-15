import React,{useRef,useState,useEffect}  from 'react';
import Tr from './tr/Tr';
import Navtable from './navtable/Navtable';
import axios from 'axios';
import config from '../../../../config/config';
export default function Table({data,listeunitee}){
    //variable
    const [listeUnitee,setListeUnitee]= useState(listeunitee);
    const [listecolonne,setListecolonne]=useState([
        {th:'Nom',colonne:'nomarticle',choix:true},
        {th:'Unitee',colonne:'nomunitee',choix:true},
        {th:'Quantitee',colonne:'quantitee',choix:true},
        {th:'Groupe',colonne:'nomgroupe',choix:true},
        {th:'Famille',colonne:'nomfamille_article',choix:true},
        {th:'TVA',colonne:'nomtva',choix:1}
     ]);   
    //fin variable
    // style css
    const cellStyle = {
        textAlign: 'center'
    };
    // fin style css
    return(
        <>
        <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
            <div className="table-responsive">
                <Navtable listecolonne={listecolonne} setListecolonne={setListecolonne}></Navtable>
                <table className="table table-bordered tablesimple">
                <thead>
                    <tr>
                    {listecolonne && listecolonne.map((value, index) => (
                        value.choix==true ? <th key={index}>{value.th}</th> : null
                    ))}
                        <th style={cellStyle} >Modification</th>
                        <th style={cellStyle} >Unitee</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((value,index)=>(
                        
                        <Tr key={index} data={value} colonne={listecolonne} listeunitee={listeUnitee}></Tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
        </>
    );
}