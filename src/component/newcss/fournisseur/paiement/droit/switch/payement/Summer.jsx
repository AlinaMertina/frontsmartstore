import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';

export default function Summer({setChoixDroit}){
    const containerStyles = {
        overscrollBehavior: 'contain',
        backgroundColor: '#F3F6FF',
        height: '100%',
        overflowY: 'auto',
        paddingLeft: '1rem', // Assuming ps-2 means 1rem of padding-left
        maxHeight: 'calc(100vh - 7.5rem)'
    };
    return(
        <>
        <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}> Summer</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={(e)=>{setChoixDroit(e,7)}} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]" style={containerStyles}>
                        <ul class="space-y-2 pb-16">
                            <li onClick={(e)=>{setChoixDroit(e,4)}}  style={{ ...styles.titreGris, cursor: 'pointer' }}>
                                    Définir la date de fin de paiement
                            </li>
                            <li onClick={(e)=>{setChoixDroit(e,5)}}  style={{ ...styles.titreGris, cursor: 'pointer' }}>
                                    Historique de paiement
                            </li>
                            <li onClick={(e)=>{setChoixDroit(e,6)}}  style={{ ...styles.titreGris, cursor: 'pointer' }}>
                                    Paiement
                            </li>
                        </ul>             
                    </div>
                    </div>
                </div>
        </div>

       
        </>
    );
}
