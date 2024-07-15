import React  from 'react';
import styles from '../../../../../../../../datajson/style/style';

export default function Tr({data,detailleCommandeFrns}){
    console.log(data);
    return(
        <>  
        <tr  style={styles.titreGris}>
            <td>{data.code}</td>
            <td>{data.nomfournisseur}</td>
            <td>
                <button type="button" className="btn btn-inverse-primary btn-fw" 
                    onClick={(e)=>{detailleCommandeFrns(e,data)}}> 
                <i className="mdi mdi-border-color"></i> 
                </button>
            </td>
        </tr>
        </>
    );
}
