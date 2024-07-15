import React,{useRef}  from 'react';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
import Ajout from '../pop/ajout/Ajout';
import Recherche from './recherche/Recherche';
export default function Header({
    listegroupe_article,groupe_article,setGroupe_article,
    listefamille,famille,setFamille,
    listetva,tva,setTva,
    mot,setMot,
    size,
    listeunitee
    }){
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
                    listegroupe_article={listegroupe_article} groupe_article={groupe_article} setGroupe_article={setGroupe_article}
                    listefamille={listefamille} famille={famille} setFamille={setFamille}
                    listetva={listetva} tva={tva} setTva={setTva}
                    mot={mot} setMot={setMot}
                ></Recherche>

            </div>
            </div>
            <Ajout moi={ajout} listegroupe_article={listegroupe_article} listeunitee={listeunitee} size={size}></Ajout>
        </>
    );

}