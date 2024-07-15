import React, { useRef,useState }  from 'react';
import config from '../../../config/config';
import axios from 'axios';

export default function Modification({lien,data,name,moi}){
    // modification de donne id,nom
    const [formData, setFormData] = useState(data);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //requette de changement 
    const submit = async (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+lien,formData)
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
      // reInitialisationVu(debut,size);
      
    };
    //display none du dive
    const close = () => {
        moi.current.style.display='none';
    };
    return(
        <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop">
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        Modification {name}
                </h3>
                  <form className="forms-sample" onSubmit={submit} >
                      <div className="form-group">
                          {/* <label htmlFor="exampleInputUsername1">Nom </label> */}
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder={data.nom} name='nom' onChange={handleChange} />
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