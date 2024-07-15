import React,{useState,useEffect} from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Select from '../../selectrecherche/Select';
import imageCompression from 'browser-image-compression';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
export default function Ajout({lien,nom,moi,listeforeignkey}){

    const [error, setError] = useState(null);
      const [erroruplaod, setErroruplaod] = useState({
        color:'green',
        value:''
      });

      const [formData, setFormData] = useState({
          login:'',
          password:'',
          idrole:'',
          image:'',
          extensionimage:'',
          email:''
      });
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
          } catch (error) {
            console.error('Erreur lors de la compression de l\'image:', error);
            setErroruplaod({ ...erroruplaod, value: 'Erreur lors de la compression de l\'image', color: 'red' });
          }
        }
      };
      const handleSelectChange=(e)=>{
        console.log(e.target.value);
        setFormData({ ...formData, ['idrole']: e.target.value });
      }
      const submit = async (e) => {
          e.preventDefault();
          // axios.post(config.lienCrudmetier+lien,formData, {
          //   headers: {
          //       'Content-Type': 'multipart/form-data'
          //   }
          // })
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
      const close = () => {
        moi.current.style.display='none';
      };
      useEffect(() => {
        // console.log(erroruplaod);
        // console.log(formData);
      }, [erroruplaod,formData]); 
      return(
          <div ref={moi} className="main-panel addService">
                  <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                    <div className="col-md-8 ">
                      <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                          Ajouter une nouvelle {nom}
                      </h3>
                        <form onSubmit={submit}  className="forms-sample">
                        <p style={{ color: 'red' }}>{error}</p>

                            <div class="form-group">
                                <label htmlFor="exampleInputName1">Image</label>
                                <input type="file" class="form-control" id="exampleInputName1" placeholder="image"  onChange={handleImageChange}  name='image'/>
                                <p style={{ color: erroruplaod.color }}>{erroruplaod.value}</p>
                            </div>

                            <div class="form-group">
                                <label htmlFor="exampleInputName1">login</label>
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="login"  onChange={handleChange}  name='login'/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputName1">email</label>
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="email"  onChange={handleChange}  name='email'/>
                            </div>

                            <div class="form-group">
                                <label htmlFor="exampleInputName1">Mot de passe</label>
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="password"  onChange={handleChange}  name='password' />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputName1">Roles</label>
                                <select class="form-control" onChange={handleSelectChange} name='idrole'>
                                  {listeforeignkey && listeforeignkey.length > 0 ? (
                                      listeforeignkey.map(option => (
                                          <option value={option.id}> {option.nom} </option>
                                      ))
                                  ) : (
                                      <option></option>
                                  )}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">cree</button>
                        </form>

                    </div>
                  </div>
          </div>
      );
  
  }