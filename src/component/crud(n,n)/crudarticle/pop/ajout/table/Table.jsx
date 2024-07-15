import React,{useRef,useState}  from 'react';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../../../../config/config';
export default function Table({listeunitee,listeuniteeArticle,setListeuniteeArticle,errorduplicateunitte}){
    const [rows,setRows]=useState(listeuniteeArticle);
    const [valuerow,setFormData]=useState({
        idunitee:'',
        nomunitee:'',
        quantitee:'',
        vente:'oui',
        valide_vente:1,
        idarticle:''
    });

    const options = listeunitee!==null ? listeunitee.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => {
        setSelectedOption(option);
        setFormData((prevState) => ({
        ...prevState,
        idunitee: option.value,
        nomunitee: option.label
        }));
        console.log(valuerow);
    };
    const [isChecked, setIsChecked] = useState(true); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
        setFormData((prevState) => ({
        ...prevState,
        vente: !isChecked === true ? 'oui' :'non',
        ouinon: !isChecked === true ? 1 :0
        }));
        setIsChecked((prevIsChecked) => !prevIsChecked);
        
    };
    const handleChangequantitee = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          quantitee:e.target.value
        }));
    };
    const handleDeleteRow = (indexToDelete) => {
        setListeuniteeArticle(prevFormData => ({
          ...prevFormData,
          uniteearticle: rows.filter((_, index) => index !== indexToDelete)
        }));
        setRows(rows.filter((_, index) => index !== indexToDelete));
    };
    const cellStyle = {
        textAlign: 'center'
      };
    const addRow = async (e) => {
    e.preventDefault();
    setListeuniteeArticle(prevFormData => ({
        ...prevFormData,
        uniteearticle: [...prevFormData.uniteearticle, valuerow]
    }));
    setRows([...rows, valuerow]);
    };

    return(
    <>
           <h4 class="card-title">Liste  Unitee  </h4>
                <p style={{color:'red'}}> {errorduplicateunitte} </p>
                <div className="table-responsive">
                    <table className="table table-bordered tablesimple" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                        <th>Unitee</th>
                        <th>Quantitee</th>
                        <th>Vente valide</th>
                        <th style={cellStyle} >Suppression</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        options={options}
                                        placeholder={selectedOption && selectedOption.label}
                                />
                            </td>
                            <td>
                                <input type="texte" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="0.0"  onChange={handleChangequantitee }/> 
                            </td>
                            <td style={cellStyle} >
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="vente[]"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </td>
                            <td style={cellStyle}>
                                    <button type="button" className="btn btn-inverse-info btn-fw" onClick={addRow}>
                                    <i class="mdi mdi-plus" ></i>
                                    </button>
                            </td>
                        </tr>
                        {rows && rows.map((row,index) => (
                            <tr key={index}>
                            <td>{row.nomunitee}</td>
                            <td>{row.quantitee}</td>
                            <td>{row.valide_vente == 1 ? 'OUI' :'NON'}</td>
                            <td style={cellStyle}>
                                    <button type="button" className="btn btn-inverse-danger btn-fw" onClick={() => handleDeleteRow(index)}>
                                        <i className="mdi mdi-close"></i>
                                    </button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>  
    </>
    );

}