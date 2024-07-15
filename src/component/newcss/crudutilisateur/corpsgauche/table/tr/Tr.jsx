import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';

import StatiqueFonction from '../../../../../../statiquefonction/Fonction';

export default function Tr({data,setChoix ,dataselect,setValuemodif}){

    const modification=(value)=>{
        setChoix(value);
        setValuemodif(data);
     }

    const role = StatiqueFonction.getNom(dataselect,data.idrole)

    return(
        <>  
            <tr  style={data.active===1 ?styles.active : styles.desactive}>
                <td className="py-1">
                    <img src={data.image} alt="Image" />
                </td>
                <td>{data.login}</td>
                <td>{role}</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{modification(2)}}> <i className="mdi mdi mdi-lock"></i> </button>
                </td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{modification(3)}}> <i className="mdi mdi-border-color"></i> </button>
                </td>
            </tr>
        </>
    );
}
