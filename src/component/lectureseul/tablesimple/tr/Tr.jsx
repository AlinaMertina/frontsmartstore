import React, { useRef }  from 'react';
import Modification from '../../../crudsimple/pop/Modification';
import { Link } from 'react-router-dom';

export default function Tr({data,lien,name}){
    const up = useRef(null);
    const upblock = () => {
      up.current.style.display='block';
    };
    const cellStyle = {
        textAlign: 'center'
      };
    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.nom}</td>
            <td style={cellStyle}>
                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}> <i className="mdi mdi-border-color"></i> </button>
                <Modification moi={up} lien={lien} data={data} name={name}></Modification>
            </td>
            <td style={cellStyle}>
                    <Link to={`/utilisateurs/${data.id}`}>
                        <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}>
                        <i className="mdi mdi-format-list-bulleted"></i>
                        </button>
                     </Link>
            </td>
        </tr>
    );

}