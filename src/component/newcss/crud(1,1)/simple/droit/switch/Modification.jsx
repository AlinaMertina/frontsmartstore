import React, { useEffect, useRef,useState }  from 'react';
import axios from 'axios';
import config from '../../../../../../config/config';
import styles from '../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../statiquefonction/Fonction';
export default function Modification({lien,choixElementDroitPF,reload,updata,setUpdata,colonne}){
    console.log(updata);
    const [formData, setFormData] = useState(updata);
    const handleChange = (e) => {
        setUpdata({ ...formData, [e.target.name]: e.target.value });
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [active, setActive] = useState(updata.active== 1 ?'activer':'desactiver');
    const [isChecked, setIsChecked] = useState(updata.active==1 ? true :false); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
      setFormData((prevState) => ({
        ...prevState,
        active: isChecked === true ? 0 :1
      }));
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setActive(active=='activer' ? 'desactiver' :'activer')
    };
     //requette de changement 
     const submit = async (e) => {
        e.preventDefault();
        axios.put(config.lienCrudmetier+lien,formData)
        .then(response => {
          const responseData = response.data;
          if (responseData.data=='ok') {
              close();
              window.location.reload();
          } else {
            console.log(responseData.data);
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
    };
    //display none du dive

    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Modification</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                        {colonne && colonne.map((value)=>(
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>{StatiqueFonction.capitalizeFirstLetter(value)}</label>
                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder={updata[value]} style={styles.backgroundColorDroit} onChange={handleChange} name={value}/>
                            </div>
                        ))}
                        <div class="form-group">
                             &nbsp;&nbsp; &nbsp;&nbsp;
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                              {active}
                            </label>
                            
                        </div>
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reload}><i className='mdi mdi-autorenew'></i></button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );

}