import React,{useRef}  from 'react';
import Recherche from './recherche/Recherche';
import Ajout from '../../pop/Ajout';
import StatiqueFonction from '../../../../statiquefonction/Fonction';

export default function Header({setData,setDebut,setFin,fin,debut,size}){
    //affichage div ajout 
    const moi = useRef(null);
    const ajout = () => {
        if (moi.current) {
            moi.current.style.display = 'block';
        }
    };
    return(
        <>
        <div className="navbar col-md-12 col-lg-12 col-12 p-0 d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <h3 className="text-capitalize styletexte" >{ StatiqueFonction.capitalizeFirstLetter(name)}</h3>
            </div>
        <div className="navbar-menu-wrapper d-flex align-items-center ">
            <button type="button" className="btn btn-inverse-primary btn-fw" onClick={ajout}> <i className="mdi mdi-plus"></i> </button>
           <Recherche 
            setData={setData} setDebut={setDebut} setFin={setFin} debut={debut} fin={fin} size={size}
            > </Recherche>
        </div>
        </div>
            <Ajout moi={moi}></Ajout>
        </>
    );



}