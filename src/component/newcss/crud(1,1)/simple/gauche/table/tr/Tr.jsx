import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../statiquefonction/Fonction';


export default function Tr({data,modificationValue,colonne}){
    return(
        <>
            <tr style={data.active ==1 ? styles.backgroundColorDroit : styles.backgroundColorGauche }>
                <td class="pl-0" style={styles.textAlignCenter}>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    {StatiqueFonction.getSequence(data.id)}
                </td>
                {colonne && colonne.map((value)=>(
                    <td style={styles.titreGris}>{data[value]}</td>
                ))}
                <td  style={styles.titreGris}>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{modificationValue(data)}}> 
                        <i className="mdi mdi mdi-lock"></i> 
                    </button>
                </td>
            </tr>
        </>
    );

}
