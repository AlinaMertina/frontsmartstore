import React, { useEffect, useRef,useState }  from 'react';
import axios from 'axios';
import config from '../../../../../../config/config';
import styles from '../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../statiquefonction/Fonction';
export default function Ajout({lien,choixElementDroitPF,reload,formatEntitee,colonne}){
    //format data
    const [formData, setFormData] = useState(formatEntitee);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(formData.nom);
    };
    const submit = async (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+lien,formData)
        .then(response => {
          const responseData = response.data;
          if(responseData.data=='ok'){
            window.location.reload();
          }else{
            setError('Duplication de nom ou  probleme serveur ')
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
    };

    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Ajout</p>
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
                              <input type="text" class="form-control" id="exampleInputUsername1" placeholder="nom" style={styles.backgroundColorDroit} onChange={handleChange} name={value}/>
                            </div>
                        ))}
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