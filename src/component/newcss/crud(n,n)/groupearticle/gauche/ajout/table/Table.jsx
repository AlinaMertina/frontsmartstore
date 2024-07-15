import React,{useRef,useState,useEffect}  from 'react';
import styles from '../../../../../../../datajson/style/style'
import Select from 'react-select';

export default function Table({addListeUnitee,listeunitee,error,uniteemodification,removeUnitee,idgroupe,idarticle}){
    //css 
    const cellStyle = {
        textAlign: 'center',
        marginBottom:'2%',
          };
         
    //fin css
    //declaration variable
    const [valuerow,setFormData]=useState({
        idunitee:'',
        nomunitee:'',
        quantitee:'',
        vente:'oui',
        valide_vente:1,
        idgroupe:idgroupe,
        idarticle:idarticle
    });
    const [rows,setRows]=useState(uniteemodification==null ? [] : uniteemodification );
    //fin declaration variable
    //foction
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
        removeUnitee(rows.filter((_, index) => index !== indexToDelete))
        // addListeUnitee();
        setRows(rows.filter((_, index) => index !== indexToDelete));
      };
    const addRow = async (e) => {
      e.preventDefault();
      addListeUnitee(valuerow);
      setRows([...rows, valuerow]);
    };
    //foction
    return(
        <>
           <p class="card-description">
                          Unitees
            </p>
            <p style={{color:'red'}}> {error} </p>
            <div class="table-responsive">
                <table class="table ">
                    <thead>
                        <tr>
                        <th style={styles.titreViollete}>
                            Unitee
                        </th>
                        <th style={styles.titreViollete}>
                            Quantitee
                        </th>
                        <th style={styles.titreViollete}>
                            Vente
                        </th>
                        <th style={styles.titreViollete}>
                            Supprimer
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  style={styles.titreGris}>
                            <td class="py-1">
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder={selectedOption && selectedOption.label}
                                />
                            </td>
                            <td class="py-1">
                                <input 
                                    type="texte" 
                                    class="form-control form-control-lg" 
                                    id="exampleInputEmail1" placeholder="0.0"  
                                    onChange={handleChangequantitee }/> 
                            </td>
                            <td style={cellStyle}>
                                <input
                                type="checkbox"
                                className="form-check-input"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                style={{ width: '20px', height: '20px' }}
                                />
                            </td>
                            <td >
                              <button type="button" className="btn btn-inverse-primary btn-fw" onClick={addRow}>
                                <i class="mdi mdi-plus" ></i>
                              </button>
                            </td>
                        </tr>
                        {rows && rows.map((row,index) => (
                            <tr key={index} style={styles.backgroundColorGauche}>
                                <td style={styles.titreGris} > &nbsp;&nbsp; {row.nomunitee}</td>
                                <td style={styles.titreGris} >  &nbsp;&nbsp; {row.quantitee}</td>
                                <td style={styles.titreGris} > &nbsp;&nbsp;  {row.vente == null ? ( 
                                    row.valide_vente==1 ? 'oui' :'non'
                                ) : row.vente }</td>
                                <td >
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