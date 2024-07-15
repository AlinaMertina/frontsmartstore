import React, { useRef }  from 'react';

import ModificationImage from '../../pop/ModificationImage';
import ModificationColomun from '../../pop/ModificationColomun';
import StatiqueFonction from '../../../../../statiquefonction/Fonction';
import ModificationMotdepass from '../../pop/ModificationMotdepass';
import ChangementActive from '../../pop/ChangementActive';

export default function Tr({data,dataselect,lien,name}){
    const up = useRef(null);
    const upblock = () => {
      up.current.style.display='block';
    };
    const remove = useRef(null);
    const removeblock = () => {
        remove.current.style.display='block';
    };
    const modifimage =  useRef(null);
    const modiflogin =useRef(null);
    const modfpassword = useRef(null);
    const modifimageblock = () => {
        modifimage.current.style.display='block';
    };
    const modifloginblock = () => {
        modiflogin.current.style.display='block';
    };
    const modfpasswordblock = () => {
        modfpassword.current.style.display='block';
    };

    const cellStyle = {
        textAlign: 'center'
    };
    const role = StatiqueFonction.getNom(dataselect,data.id)
    return(
        <tr>
        <td className="py-1">
            <a onClick={modifimageblock}>
                <img src={data.image} alt="Image" style={{ width: '50px', height: '50px' }} />
            </a>
            <ModificationImage moi={modifimage} data={data} lien={lien}></ModificationImage>
        </td>
        <td>
            <a onClick={modifloginblock}>
                {data.login}
            </a>
            <ModificationColomun moi={modiflogin} data={data} lien={lien} nomcolumn='login' />
        </td>
        <td>
            <button type="button" className="btn btn-inverse-primary btn-fw" onClick={modfpasswordblock}> <i className="mdi mdi-border-color"></i> </button>
            <ModificationMotdepass moi={modfpassword} data={data} lien={lien}></ModificationMotdepass>
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

    </tr>
    
    );

}
