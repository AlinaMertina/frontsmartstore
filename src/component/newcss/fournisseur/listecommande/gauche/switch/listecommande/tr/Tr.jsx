import React,{useRef,useState,useEffect}  from 'react';
import styles from '../../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
export default function Tr({data,voirDetaille}){
    return(
        <>
            <tr style={styles.titreGris}>
                <td>{data.id}</td>
                <td>{StatiqueFonction.formatDate(data.date)}</td>
                <td>{data.nomutilisateur}</td>
                <td> &nbsp; {data.demande}</td>
                <td> &nbsp; {data.validee}</td>
                <td>&nbsp; {data.refuse}</td>
                <td>&nbsp; {data.livree}</td>
                <td>&nbsp; {data.total_commandes}</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={(e) => { voirDetaille(e, data.id); }}> 
                        <i className="mdi mdi-format-list-bulleted"></i> 
                    </button>
                </td>

            </tr>
        </>
    );

}