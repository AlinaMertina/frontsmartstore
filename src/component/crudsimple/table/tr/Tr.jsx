import React, { useRef }  from 'react';
import ValidationSuppression from '../../pop/ValidationSuppression';
import Modification from '../../pop/Modification';
import ChangementActive from '../../../crud(n,1)/crudutiilsateur/pop/ChangementActive';
import { Link } from 'react-router-dom';
export default function Tr({data,lien,name,rang,detaillelink}){
    const up = useRef(null);
    const upblock = () => {
      up.current.style.display='block';
    };
    const remove = useRef(null);
    const removeblock = () => {
        remove.current.style.display='block';
    };
    const cellStyle = {
        textAlign: 'center'
      };
    return(
        <tr>
            <td>{rang}</td>
            <td>{data.nom}</td>
            <td style={cellStyle}>
                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}> <i className="mdi mdi-border-color"></i> </button>
                <Modification moi={up} lien={lien} data={data} name={name}></Modification>
            </td>
            <td style={cellStyle}>
                {data.active === 1 ? (
                    <button type="button" className="btn btn-inverse-success btn-fw" onClick={removeblock}>
                        <i className="mdi mdi-close"></i>
                    </button>
                ) : (
                    <button type="button" className="btn btn-inverse-dark btn-fw" onClick={removeblock}>
                        <i className="mdi mdi-close"></i>
                    </button>
                )}
            <ChangementActive moi={remove} lien={lien} data={data}></ChangementActive>
            </td>
            {detaillelink !=null ?
                <td style={cellStyle}>
                    <Link to={`/${detaillelink}/${data.id}`}>
                        <button type="button" className="btn btn-inverse-info btn-fw" onClick={upblock}> 
                            <i className="mdi mdi-format-list-bulleted"></i> 
                        </button>
                    </Link>
                </td>
            :
                null
            }
        </tr>
    );

}