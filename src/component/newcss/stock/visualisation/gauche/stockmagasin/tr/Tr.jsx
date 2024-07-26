import React  from 'react';
import styles from '../../../../../../../datajson/style/style';

export default function Tr({data,listemagasinprint}){
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
                {listemagasinprint.map((value, index) => (
                    <td key={index} style={styles.titreGris}>
                        {data[value]}
                    </td>
                ))}
            </tr>
        </>
    );
}