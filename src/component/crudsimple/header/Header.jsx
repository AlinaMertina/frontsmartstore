import React,{useRef}  from 'react';

import RechercheSimple from '../recherchesimple/RechercheSimple';
import StatiqueFonction from '../../../statiquefonction/Fonction';
import Ajout from '../pop/Ajout';

export default function Header({lien,setData,setMot,mot,size,name,reInitialisationVu}){

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
           <RechercheSimple lien={lien} setData={setData} setMot={setMot} mot={mot} size={size} reInitialisationVu={reInitialisationVu}> </RechercheSimple>
        </div>
        </div>
            <Ajout moi={moi} lien={lien} nom={name} reInitialisationVu={reInitialisationVu} size={size} ></Ajout>
        </>
       
    );
    
}
