import React,{useRef}  from 'react';
import Recherche from '../../../crud(n,1)/crudutiilsateur/recherche/Recherche';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
import Ajout from '../pop/ajout/Ajout';


export default function Header(
    {lien,setData,setMot,mot,idFoureignkey,setIdFoureignkey,
    size,name,listeforeignkey,nameforeignkey,
    listeunitee,listefamille,listetva}){
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
            <Recherche lien={lien} setData={setData} setMot={setMot} mot={mot}  idFoureignkey={idFoureignkey}  setIdFoureignkey={setIdFoureignkey} size={size} listeforeignkey={listeforeignkey}    nameforeignkey={nameforeignkey} datalien={'groupe_articles'}></Recherche>
            </div>
            </div>
            <Ajout moi={moi} listeunitee={listeunitee} listefamille={listefamille} listetva={listetva}></Ajout>
        </>
    );

    
}