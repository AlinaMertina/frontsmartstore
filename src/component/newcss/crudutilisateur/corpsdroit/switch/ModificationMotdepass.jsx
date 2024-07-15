import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import axios from 'axios';
import config from '../../../../../config/config';
export default function ModificationMotdepass({data,lien,choix1,setChoix}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id,login, nomrole,image } = user;
    const [erroruplaod, setErroruplaod] = useState({
        color:'green',
        value:''
      });
    const [code, setCode] = useState(null);
    const [formData, setFormData] = useState({
        id: data !=null ? data.id : null,
        oldpassword:'',
        newpassword1:'',
        newpassword2:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCode = (e) => {
        setCode(e.target.value);
    };
      //requette de changement 
    
    const submit = async (e) => {
        e.preventDefault();
        if(code!=null){
            codeconfirmation(e);
            setCode(null);
            return ;
        }
        if(formData.newpassword1!=formData.newpassword2){
            setErroruplaod({ ...erroruplaod, value: "Les deux nouveaux mots de passe ne se ressemblent pas", color: 'red' });
            return;
        }
        axios.put(config.lienCrudmetier+lien+'/'+id+'/'+data.id+'/'+formData.oldpassword+'/'+formData.newpassword1)
        .then(response => {
          const responseData = response.data;
          if (responseData.data=='ok') {
              window.location.reload();
          } else {
            setErroruplaod({ ...erroruplaod, value: "L'ancien mot de passe est incorrect. Pour des raisons de sécurité, entrez le code envoyé par email.", color: 'red' });
            setCode('0000');
            // console.log(responseData.data);
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
      // reInitialisationVu(debut,size);
      
    };
    //display none du dive
    const [choix, setValue] = useState(choix1);
    const notification=()=>{
        setChoix(choix==4 ? 5:4 );
        setValue(choix==4 ? 5:4);
    }

    const codeconfirmation = async (e) => {
        e.preventDefault();
        const lien = config.lienCrudmetier+'utilisateurs/code/'+data.id+'/'+code+'/'+formData.newpassword1;
        console.log(lien);
        axios.put(lien)
        .then(response => {
          const responseData = response.data;
          console.log(responseData.data);
          if (responseData.data!=null) {
              window.location.reload();
          } else {
            setErroruplaod({ ...erroruplaod, value: "code not valide veillez consulte votre email", color: 'red' });
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
                            <p class="card-title ajout" style={styles.titreViollete}> Modification mot de passe</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={notification} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form class="forms-sample" onSubmit={submit} >
                        <p style={{color:'red'}}> {erroruplaod.value}</p>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Ancienne </label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder="ancienne"  style={styles.backgroundColorDroit} onChange={handleChange}  name='oldpassword'/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Nouveaux </label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder="nouveaux" style={styles.backgroundColorDroit} onChange={handleChange}  name='newpassword1'/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Confirmation </label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder="confirmation" style={styles.backgroundColorDroit} onChange={handleChange}  name='newpassword2'/>
                        </div>
                        {code!=null ? (
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Code de confirmation </label>
                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder="confirmation" style={styles.backgroundColorDroit} onChange={handleCode} />
                            </div>
                        ) : null
                        }
                       

                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" ><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}