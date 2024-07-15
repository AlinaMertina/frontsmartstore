import React, { useRef,useState }  from 'react';
import ChangementActive from '../../../../../../crud(n,1)/crudutiilsateur/pop/ChangementActive';
import Select from 'react-select';
export default function Tr({listevalue,listeunitee,moi}){
    const cellStyle = {
        textAlign: 'center'
    };

    if(moi){
        if(moi.current){
            moi.current.style.display = 'none';
        }
    }
    const remove = () => {
        if(moi){
            if (moi.current) {
                moi.current.remove();
            }
        }
    };
      //select react 
    const options = listeunitee!==null ? listeunitee.map(item => ({
    value: item.id,
    label: item.nom
    })) : null;
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => {
        setSelectedOption(option);
    };
    //fin select react 
    const [isChecked, setIsChecked] = useState(true); // État pour gérer si la case est cochée ou non

    const handleCheckboxChange = () => {
        setIsChecked(prevChecked => !prevChecked); // Inverse l'état actuel de la case à cocher
    };
    return(
        <tr ref={moi}>
            <td>
                <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        placeholder="..........................."
                />
            </td>
            <td>
                <input type="texte" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="0.0" name="quantitee[]" /> 
            </td>
            <td style={cellStyle} >
            <input
                type="checkbox"
                className="form-check-input"
                name="vente[]"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            </td>
            <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={remove}>
                        <i className="mdi mdi-close"></i>
                    </button>
            </td>
        </tr>
    );
}



