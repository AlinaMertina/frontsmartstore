import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
export default function Li({data1}){
   
    return(
        <>
            <li style={{width:'100%'}}>
                {/* <div class="d-flex"> */}
                    {/* <img src="images/faces/face1.jpg" alt="user"> */}
                    <div>
                    <p class="text-info mb-1">{data1.nomutilisateur}</p>
                    <p class="mb-0">{data1.montant}</p>
                    <small> {StatiqueFonction.formatDate(data1.date)} </small>
                    </div>
                {/* </div> */}
            </li>
        </>
    );

}
