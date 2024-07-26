import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import config from '../../../../../../config/config';
import axios from 'axios';
export default function Annulationcommande({data,reloadeDetaille,choixElementDroit,reload}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const annuler = (e) => {
        e.preventDefault();
        data.idetat=3;
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
    const valider = (e) => {
        e.preventDefault();
        data.idetat=2;
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
    let textIndicationEtat;
    const idu = data.idetat !=null ? parseInt(data.idetat, 10) : 0
    
    switch (idu) {
        case 2:
            textIndicationEtat = "Vous avez déjà validé cette commande.";
            break;
        case 3:
            textIndicationEtat = "Vous avez déjà refusé cette commande.";
            break;
        case 4:
            textIndicationEtat = "Cette commande est déjà livrée.";
            break;
        default:
            textIndicationEtat = null;
            break;
    }
    
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
                        {data.idetat!=1 ? (
                            <>
                                <div  class="forms-sample">
                                    <p style={{color:'green'}}>Si vous validez cette commande, 
                                    le responsable enverra une demande au fournisseur.
                                    Seule l'annulation par le fournisseur annulera cette commande.
                                    </p>
                                    <button type="submit" class="btn btn-inverse-primary btn-fw" onClick={valider}><i className='mdi mdi-check'></i></button>
                                </div>
                                <div  class="forms-sample">
                                    <p style={{color:'red'}}>Si vous annulez cette commande, vous ne pourrez plus faire 
                                    quoi que ce soit d'autre que 
                                    de refaire une autre commande. 
                                    Êtes-vous sûr de vouloir faire cela ?
                                    </p>
                                    <button type="submit" class="btn btn-inverse-primary btn-fw" onClick={annuler}><i className='mdi mdi-check'></i></button>
                                </div>
                            </>
                        ) : (
                        <>
                        <div  class="forms-sample">
                            <p>
                                {textIndicationEtat}
                            </p>
                        </div>
                        </>)

                        }
                        
                        
                    </div>
                </div>
                </div>
        </>
    );
}