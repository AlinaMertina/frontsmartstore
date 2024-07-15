import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../statiquefonction/Fonction';
export default function Tr({data}){

    return(
        <>
            <a class="dropdown-item preview-item" href='#'  >
                <div class="preview-thumbnail" >
                    <div class="preview-icon " style={styles.backgroundColorGauche} >
                     {StatiqueFonction.getIcone(data.nom)}
                    </div>
                </div>
                <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal" style={{ width: '50%' }}>{data.nom}</h6>
                    <p class="font-weight-light small-text mb-0 text-muted  pword-war" style={{ width: '50%' }}>
                     {data.description}
                    </p>
                </div>
            </a>
        </>
    );

}