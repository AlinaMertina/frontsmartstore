import React,{useRef,useState}  from 'react';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../../../config/config';
export default function ModificationUnitee({moi,data,lien,listeunitee,listevalue,nomgroupe,idgroupe,structureDataexport,structureRow,nomlisteDataexport}){
  const [dataexport, setDataexport] = useState(structureDataexport);
  const [rows,setRows]=useState(data);
  const [valuerow,setFormData]=useState(structureRow);
  const [errorduplicateunitee, setErrorduplicateunitee] = useState('');
  // const [liste,setListe]=useState(listeunitee);
  console.log(listeunitee)
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
    setDataexport(prevFormData => ({
      ...prevFormData,
      [nomlisteDataexport]: rows.filter((_, index) => index !== indexToDelete)
    }));
    setRows(rows.filter((_, index) => index !== indexToDelete));
  };
  const cellStyle = {
    textAlign: 'center'
  };
  const addRow = async (e) => {
    e.preventDefault();
    setDataexport(prevFormData => ({
        ...prevFormData,
        [nomlisteDataexport]: [...prevFormData[nomlisteDataexport], valuerow]
    }));
    setRows([...rows, valuerow]);
  };
  const close = () => {
    moi.current.style.display='none';
  };
  const checkForDuplicates = () => {
    for(let i=0;i<dataexport[nomlisteDataexport].length;i++){
        for(let a=0;a<dataexport[nomlisteDataexport].length;a++){
            if(i!=a){
                if(dataexport[nomlisteDataexport].nomunitee==dataexport[nomlisteDataexport][a].nomunitee){
                    setErrorduplicateunitee("Il ne devrait pas y avoir de duplication d'unitee");
                    return false;
                }
            }
        }
    }
    return true;
  };
  const submit = async (e) => {
      e.preventDefault();
      checkForDuplicates();
      console.log(dataexport);
      if(checkForDuplicates()==false){
              return ;            
      }  
      axios.put(config.lienCrudmetier+lien+idgroupe,dataexport)
      .then(response => {
        const responseData = response.data;
        console.log(responseData);
        if(responseData.data=='ok'){
          close();
          window.location.reload();
        }else{
          // setError('Duplication de nom ou  probleme serveur ')
        }
      })
      .catch(error => {
          console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
      });
  };
      return(
        <>
        <div ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                  <div className="col-md-8 ">
                    
                    <h4 class="card-title">Modification Unitee  {nomgroupe}  </h4>
                    <p style={{color:'red'}}> {errorduplicateunitee} </p>
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
                            <tr  >
                                <td>
                                 <button type="submit" className="btn btn-primary mr-2" onClick={submit}>cree</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td style={cellStyle}>
                                       
                                </td>
                              </tr>
                        </tbody>
                      </table>
                    </div>    


                  </div>
                </div>
        </div>

           
        </>
      );
  }