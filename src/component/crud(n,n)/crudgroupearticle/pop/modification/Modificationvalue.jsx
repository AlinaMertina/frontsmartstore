import React,{useRef,useState}  from 'react';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../../../config/config';
export default function Modificationvalue({listefamille,listetva,data,moi}){
  
  const [formData, setFormData] = useState(data);
  const [active, setActive] = useState(data.active== 1 ?'activer':'desactiver');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };
  //select react liste tva
    const optionstva = listetva!==null ? listetva.map(item => ({
      value: item.id,
      label: item.nom
      })) : null;
    const [selectedOptiontva, setSelectedOptiontva] = useState(data.nomtva);
    const handleChangetva = (option) => {
        setSelectedOptiontva(option.label);
        const { name, value } =option;
            setFormData(prevState => ({
        ...prevState,
        idtva: value
        }));
        console.log(formData);
    };
    //fin select react 
    //select react liste tva
    const optionsfamille = listefamille!==null ? listefamille.map(item => ({
      value: item.id,
      label: item.nom
      })) : null;
      const [selectedOptionfamille, setSelectedOptionfamille] = useState(data.nomfamille_article);
      const handleChangefamille = (option) => {
          setSelectedOptionfamille(option.label)
          const { name, value } =option;
              setFormData(prevState => ({
          ...prevState,
          idfamille_article: value
          }));
      };
    //fin select react 
    const submit = async (e) => {
      e.preventDefault();
      
      console.log(formData);
      axios.put(config.lienCrudmetier+'groupe_articles',formData)
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
          console.error('Erreur lors de l\'ajout :', error); // Gestion des eidfamille_articlerreurs de réseau ou autres erreurs inattendues
      });
    };

    const [isChecked, setIsChecked] = useState(data.active==1 ? true :false); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
      setFormData((prevState) => ({
        ...prevState,
        active: isChecked === true ? 0 :1
      }));
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setActive(active=='activer' ? 'desactiver' :'activer')
    };
 
      return(
        <>
          <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop">
              <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
              <div className="col-md-8 ">
                <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                    Ajouter une nouvelle Groupe
                </h3>
                <form  onSubmit={submit} className="forms-sample">
                        <div class="form-group row">
                            <div class="col">
                                <label>Nom Groupe</label>
                                <div id="the-basics">
                                    <input class="typeahead" type="text" placeholder={data.nomgroupe} onChange={handleChange} name='nom'/>
                                </div>
                            </div>
                            <div class="col">
                                <label>Famille Article</label>
                                <div id="bloodhound">
                                <Select
                                    value={selectedOptionfamille}
                                    onChange={handleChangefamille}
                                    options={optionsfamille}
                                    placeholder={selectedOptionfamille}
                                />
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col">
                                <label>TVA</label>
                                <div id="the-basics">
                                <Select
                                    value={selectedOptiontva}
                                    onChange={handleChangetva}
                                    options={optionstva}
                                    placeholder={selectedOptiontva}
                                />
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                              {active}
                            </label>
                            </div>
                        </div>
                       
                    <button type="submit" className="btn btn-primary mr-2">cree</button>
                  </form>
              </div>
            </div>
        </div>
        </>
      );
  }