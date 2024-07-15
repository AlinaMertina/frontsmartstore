import React,{useRef,useState,useEffect}  from 'react';
import styles from '../../../../../../../datajson/style/style';

export default function Tr({data,modificationValue}){
    return(
        <>
            <tr style={styles.titreGris}>
                <td>{data.nomarticle}</td>
                <td>{data.designation}</td>
                <td>{data.nomunitee}</td>
                <td>{data.pu}</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{modificationValue(data)}}> 
                        <i className="mdi mdi mdi-lock"></i> 
                    </button>
                </td>
            </tr>
        </>
    );

}
