import React  from 'react';
import styles from '../../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
export default function Tr({data,detailleCommandeIdcom}){

    return(
        <>  
            <tr  style={styles.titreGris}>
                <td>{StatiqueFonction.getSequence(data.idcommande_frs)}</td>
                <td>{data.nomutilisateur}</td>
                <td>{StatiqueFonction.formatDate(data.datefinpayement) }</td>
                <td>{data.ptt }</td>
                <td>{data.montant }</td>
                <td>{data.rest }</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" 
                        onClick={(e)=>{detailleCommandeIdcom(e,data)}}> 
                    <i className="mdi mdi-border-color"></i> 
                    </button>
                </td>
               
            </tr>
        </>
    );
}

