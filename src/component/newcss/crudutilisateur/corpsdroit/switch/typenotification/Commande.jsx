import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../statiquefonction/Fonction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import config from '../../../../../../config/config';
import axios from 'axios';
export default function Commande({data}){
    const navigate = useNavigate();
    const read = async (e) => {
        e.preventDefault();
        if(data.reade!=1){
            data.reade=1;
            axios.put(config.lienCrudmetier+'notification_users',data)
            .then(response => {
            const responseData = response.data;
            if (responseData.data=='ok') {
                
            } else {
                console.log(responseData.data);
            }
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
            });
        }
        // window.location.reload();
        navigate(data.idrole === 'ROL0001' ? `/listecommande/${data.idcommande_frs}` : `/listecommandeap/${data.idcommande_frs}`);

        
    };
    let content;
    switch (data.idtypenotification) {
        case 'NT0014':
            content =<>
             <Link 
                className="dropdown-item preview-item" 
               
                onClick={(e) => { read(e); }}
            >
                <div class="preview-thumbnail">
                    <div class="preview-icon bg-primary" style={styles.backgroundColorGauche}>
                        <i className="mdi mdi-cart" ></i>
                    </div>
                </div>
                <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal" ><b style={styles.titreViollete} >{data.nomnotitification}</b></h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                        {StatiqueFonction.formatRelativeTime(data.date)} <b style={styles.titreGris}> {data.nomutilisateur}</b>
                    </p>
                </div>
            </Link>
               
           
            </>
           
            break;
        default:
            content = null;
            break;
    }
   

    return(
        <>
        {content}
        </>
        
    );
}