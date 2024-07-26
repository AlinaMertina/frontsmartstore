import React  from 'react';
import styles from '../../../../../../../datajson/style/style';

export default function Tr({data}){
    return(
        <>
            <tr>
                <td  style={styles.titreGris}>
                    {data.nomarticle}
                </td>
                <td  style={styles.titreGris}>
                    {data.designation}
                </td>
                <td  style={styles.titreGris}>
                    {data.nomunitee}
                </td>
                <td  style={styles.titreGris}>
                    {data.stkinit}
                </td>
                <td  style={styles.titreGris}>
                    {data.stkfin}
                </td>
            </tr>
        </>
    );

}