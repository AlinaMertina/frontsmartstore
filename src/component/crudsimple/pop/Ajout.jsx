import React,{useState,useRef} from 'react';
import config from '../../../config/config';
import axios from 'axios';
export default function Ajout({lien,nom,moi,reInitialisationVu,size}){
  const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        nom: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData.nom);
    };
    const submit = async (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+lien,formData)
        .then(response => {
          const responseData = response.data;
          if(responseData.data=='ok'){
            close();
            reInitialisationVu(0,size);
          }else{
            setError('Duplication de nom ou  probleme serveur ')
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
    };
   
    const close = () => {
      moi.current.style.display='none';
    };
    return(
        <div ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                  <div className="col-md-8 ">
                    <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        Ajouter une nouvelle {nom}
                    </h3>
                    <form onSubmit={submit}  className="forms-sample">
                        <div className="form-group">
                          {error && error==null ? '' : <label htmlFor="exampleInputUsername1" className='texterror'>{error}</label> }
                            <input type="text" className="form-control" id="exampleInputUsername1"  onChange={handleChange} placeholder="nom" name='nom'/>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">cree</button>
                      </form>
                  </div>
                </div>
        </div>
    );

}
