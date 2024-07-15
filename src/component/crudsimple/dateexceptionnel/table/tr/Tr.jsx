import React, { useRef }  from 'react';
import Modification from '../../pop/Modification';
import StatiqueFonction from '../../../../../statiquefonction/Fonction';
export default function Tr({data}){
    const up = useRef(null);
    const upblock = () => {
      up.current.style.display='block';
    };
    const cellStyle = {
        textAlign: 'center'
    };
    return(
        <tr>
            <td>{StatiqueFonction.formatDate(data.debut) }</td>
            <td>{StatiqueFonction.formatDate(data.fin)}</td>
            <td style={cellStyle}>
                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}>
                            <i className="mdi mdi-border-color"></i>
                </button>
                <Modification  moi={up} data={data}></Modification>
            </td>
        </tr>
    );
}

