import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Select from 'react-select';
import config from '../../../../../config/config';
import axios from 'axios';
export default function Recherche({listerole,setMot,mot,idrole,setIdRole,choix1,setChoix,lien,size,setData}){
    const [motrecherche, setMotrecherche] = useState(mot);
    const [idFoureignkeyrecherche, setIdFoureignkeyrecherche] = useState(idrole);
    const options = listerole!==null ? listerole.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    const doSearch = async (e) => {
        e.preventDefault();
        const lienv = config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/'+idrole;
        console.log(lienv);

        axios.get(lienv)
            .then(response => {
                const responseData = response.data;
                console.log(responseData.data);
                setData(responseData.data);
            })
            .catch(error => {
               console.log(error)
            });
    };

    const handleChange = (e) => {
        setMot(e.target.value);
        setMotrecherche(e.target.value)
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChangeselect = (option) => {
        setSelectedOption(option.label);
        setIdRole(option.value);
        setFormData({ ...formData, idrole: option.value });
    };
    const reinitialisation = async (e) => {
        e.preventDefault();
          setMot('null');
          setIdRole('null');
          setMotrecherche('null');
          setIdFoureignkeyrecherche('null');
          window.location.reload();
      };
    const [choix, setValue] = useState(choix1);
    const notification=()=>{
        setChoix(choix==4 ? 5:4 );
        setValue(choix==4 ? 5:4);
     }

    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}> Recherche</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={notification} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={doSearch} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Nom</label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder="nom" style={styles.backgroundColorDroit} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleSelectGender" style={styles.titreGris}>Gender</label>
                            {/* <select class="form-control" id="exampleSelectGender" style={styles.backgroundColorDroit}>
                                {listerole && listerole.map((value,index)=>(
                                     <option key={index} value={value.id} class="form-control"> {value.nom}</option>
                                ))}
                                           
                            </select> */}

                            <Select  styles={styles.select}
                                      value={selectedOption}
                                      onChange={handleChangeselect}
                                      options={options}
                                      placeholder={selectedOption}
                                  />
                        </div>
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reinitialisation}><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
                </div>
        </>
    );
}