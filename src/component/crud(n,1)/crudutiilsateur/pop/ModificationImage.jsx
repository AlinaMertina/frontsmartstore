import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import StatiqueFonction from '../../../../statiquefonction/Fonction';

export default function ModificationImage({moi,data,lien}){
    // modification de donne id,nom
    const [formData, setFormData] = useState(data);
    const [erroruplaod, setErroruplaod] = useState({
        color:'green',
        value:''
      });
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

    //requette de changement 
    const submit = async (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+lien,formData)
        .then(response => {
          const responseData = response.data;
          if (responseData.data!=null) {
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
    
    const close = () => {
        moi.current.style.display='none';
    };
    useEffect( () => {
       
    }, [formData]);
    
    return(
        <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop">
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        Modification {data.login}
                </h3>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                        
                        </div>
                        <div class="col">
                                <img  className='no-border'  src={formData.image} alt="Selected" style={{ width: '100px', height: '100px'}} />
                        </div>
                        <div class="col">
                       
                        </div>
                    </div>
                </div>

                <form className="forms-sample" onSubmit={submit} >

                    <div class="form-group">
                        <label htmlFor="exampleInputName1">Image</label>
                        <input type="file" class="form-control" id="exampleInputName1" placeholder="image"  onChange={handleImageChange}  name='image'/>
                        <p style={{ color: erroruplaod.color }}>{erroruplaod.value}</p>
                    </div>
                    
                    <div className="button-container">
                        <button type="submit" className="btn btn-inverse-danger btn-fw">OUI</button>
                        <button type="button" className="btn btn-inverse-primary btn-fw" onSubmit={close}>NON</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );

}