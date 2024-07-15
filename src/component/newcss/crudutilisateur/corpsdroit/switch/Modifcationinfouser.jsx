import React,{useState,useEffect} from 'react';
import config from '../../../../../config/config';
import axios from 'axios';
import Select from 'react-select';
import StatiqueFonction from '../../../../../statiquefonction/Fonction';
import styles from '../../../../../datajson/style/style';
import imageCompression from 'browser-image-compression';
export default function Modifcationinfouser({lien,listerole,data,choix1,setChoix}){
    console.log(data);
    //declaration variable
    const [error, setError] = useState(null);
    const [erroruplaod, setErroruplaod] = useState({
        color:'green',
        value:''
    });
    const [formData, setFormData] = useState(data);
    const options = listerole!==null ? listerole.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    //fin declaration variable
    
    const [selectedOption, setSelectedOption] = useState(StatiqueFonction.getNom(listerole,data.idrole));
    const handleChangeselect = (option) => {
        setSelectedOption(option.label);
        setFormData({ ...formData, idrole: option.value });
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if(StatiqueFonction.uplaodimagevalide(file.name)==true){
          setFormData({ ...formData, extensionimage:  StatiqueFonction.extensionimage(file.name)});
          setErroruplaod({ ...erroruplaod, value: "image valide", color: 'green' });
        }else{
          setErroruplaod({ ...erroruplaod, value: "L'image n'est pas valide", color: 'red' });
          return ;
        }
        if (file) {
          try {
            const compressedFile = await imageCompression(file, {
              maxSizeMB: 1, // Taille maximale du fichier compressé (1MB dans cet exemple)
              maxWidthOrHeight: 800, // Taille maximale de largeur ou de hauteur
              useWebWorker: true, // Utiliser des Web Workers pour améliorer les performances
            });
            const reader = new FileReader();
            reader.onloadend = () => {
              setBase64Image(reader.result);
            };
            const base64String = await  StatiqueFonction.fileToBase64(file);
            setFormData({ ...formData, ['image']: base64String });
            data.image=base64String;
          } catch (error) {
            console.error('Erreur lors de la compression de l\'image:', error);
            setErroruplaod({ ...erroruplaod, value: 'Erreur lors de la compression de l\'image', color: 'red' });
          }
        }
    };
    const submit = async (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+lien,formData)
        .then(response => {
          const responseData = response.data;
          if(responseData.data=='ok'){
            close();
            window.location.reload();
          }else{
            setError(responseData.error);
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
    };
    useEffect(() => {
      
    }, [erroruplaod,formData]); 
    const [choix, setValue] = useState(choix1);
    const notification=()=>{
        setChoix(choix==4 ? 5:4 );
        setValue(choix==4 ? 5:4);
     }
    return(
        <>
           <div  class="col-11  ml-3 ">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}> Ajout</p>
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={notification}  style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form  onSubmit={submit} class="forms-sample">
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Image</label>
                              <ul class="icon-data-list row ">
                                <li>
                               
                                  <div class="d-flex">
                                    <div class="py-1">
                                      <img src={data.image} alt="image" style={styles.image}/>
                                    </div>
                                   
                                    <div >
                                        <input type="file" class="form-control" id="exampleInputUsername1" placeholder="image" style={styles.backgroundColorDroit} onChange={handleImageChange} name='image' />
                                        <p style={{ color: erroruplaod.color }}>{erroruplaod.value}</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris} >Nom utilisateur</label>
                              <input type="text" class="form-control" id="exampleInputUsername1" placeholder={data.login} onChange={handleChange} style={styles.backgroundColorDroit} name='login' />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Email</label>
                              <input type="text" class="form-control" id="exampleInputUsername1"  placeholder={data.email}  onChange={handleChange} style={styles.backgroundColorDroit} name='email'/>
                            </div>
                            
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Role</label>
                              <Select 
                                      value={selectedOption}
                                      onChange={handleChangeselect}
                                      options={options}
                                      placeholder={selectedOption}
                                  />
                            </div>
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