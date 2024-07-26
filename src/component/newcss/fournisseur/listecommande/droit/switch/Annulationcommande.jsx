import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import config from '../../../../../../config/config';
import axios from 'axios';
export default function Annulationcommande({data,reloadeDetaille,choixElementDroit,reload}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const submit = (e) => {
        e.preventDefault();
        data.idetat=5;
        data.idutilisateur=id;
        data.date=new Date().toISOString();
        console.log(data);
        axios.post(config.lienCrudmetier+'commande_frns_detailles',data)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            reloadeDetaille()
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Annulation de commande</p>
                        </div>
                        <div class="col-2">
                            <a   class="nav-link" onClick={()=>{choixElementDroit(2)}} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                        <p style={{color:'red'}}>Si vous annulez cette commande, c'est qu'il y a un problème chez le fournisseur.
                        </p>
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reload}><i className='mdi mdi-autorenew'></i></button>
                    </form>
                    </div>
                </div>
                </div>
        </>
    );
}