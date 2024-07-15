import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../statiquefonction/Fonction';
export default function Tr({data}){

    return(
        <>
            <tr>
                <td class="pl-0">
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {StatiqueFonction.getIcone(data.nom)}
                </td>
                <td style={styles.titreGris}>{data.nom}</td>
            </tr>
        </>
    );

}