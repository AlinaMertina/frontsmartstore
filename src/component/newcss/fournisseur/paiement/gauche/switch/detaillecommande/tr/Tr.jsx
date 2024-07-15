import React  from 'react';
import styles from '../../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
export default function Tr({data}){
    let color ;
  
    const id = data.idetat !=null ? parseInt(data.idetat, 10) : 0
    switch (id) {
        case 1:
            color= styles.backgroundColorDroit
            break;
        case 2:
            color= styles.backgroundColorVerteblanc
            break;
        case 3:
            color= styles.backgroundColorGauche
            break;
        case 4:
            color= styles.backgroundColorVerte
            break;
        default:
            color= styles.backgroundColorDroit
            break;
    }
    return(
        <>
            <tr  style={color} >
                <td style={styles.titreGris} >{data.nomfournisseur}</td>
                <td style={styles.titreGris} >{data.nomarticle}</td>
                <td style={styles.titreGris} >{data.designation}</td>
                <td style={styles.titreGris} >{data.nomunitee}</td>
                <td style={styles.titreGris} >{data.pu}</td>
                <td style={styles.titreGris} >{data.qt}</td>
                <td style={styles.titreGris} >{data.nomutilisateur}</td>
                <td style={styles.titreGris} >{StatiqueFonction.formatDate(data.datelivraison)}</td>
            </tr>
        </>
    );
}

