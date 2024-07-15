import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../statiquefonction/Fonction';
export default function Tr({data}){

    const handleRowClick = () => {
        window.location.href = `utilisateurs/${data.id}`;
    };
    return(
        <>
      
            <tr className='lecturehover' onClick={handleRowClick}>
                    <td class="pl-0">
                        &nbsp;&nbsp; &nbsp;&nbsp;
                        {StatiqueFonction.getIcone(data.nomrole)}
                    </td>
                    <td style={styles.titreGris}>{data.nomrole}</td>
                    <td class="text-muted" style={styles.titreGris}>{data.nombre_utilisateurs}</td>
            </tr>
       
           
        </>
    );

}