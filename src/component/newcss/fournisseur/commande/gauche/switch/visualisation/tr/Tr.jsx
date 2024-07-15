import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../../datajson/style/style';

export default function Tr({index,data,modification,suppression}){
    
    return(
        <>
            <tr style={styles.titreGris}>
                <td>{data.nomfournisseur}</td>
                <td>{data.nomarticle}</td>
                <td>{data.designation}</td>
                <td>{data.nomunitee}</td>
                <td>{data.pu}</td>
                <td>{data.qt}</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={(e)=>{modification(e,data)}}> 
                        <i className="mdi mdi mdi-lock"></i> 
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={()=>{suppression(index)}}> 
                        <i className="mdi mdi-delete"></i> 
                    </button>
                </td>
            </tr>
        </>
    );

}
