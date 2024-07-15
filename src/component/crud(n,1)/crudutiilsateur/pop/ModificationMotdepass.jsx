import React, { useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import CodeValidation from './CodeValidation';

export default function ModificationMotdepass({moi, data,lien}){
    // modification de donne id,nom
    const [erroruplaod, setErroruplaod] = useState({
        color:'green',
        value:''
      });
    const [formData, setFormData] = useState({
        id:data.id,
        oldpassword:'',
        newpassword1:'',
        newpassword2:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //code de validation
    const codevalidation = useRef(null);

    //requette de changement 
    const submit = async (e) => {
        e.preventDefault();
        if(formData.newpassword1!=formData.newpassword2){
            setErroruplaod({ ...erroruplaod, value: "les deux nouveaux mot de passe ne se ressemble pas", color: 'red' });
            return;
        }
        axios.put(config.lienCrudmetier+'utilisateurs/'+data.id+'/'+formData.oldpassword+'/'+formData.newpassword1)
        .then(response => {
          const responseData = response.data;
          if (responseData.data=='ok') {
              close();
              window.location.reload();
          } else {
            codevalidation.current.style.display='block';
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
        <>
         <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop">
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        Modification mot de passe
                </h3>
                <form className="forms-sample" onSubmit={submit} >
                    <div class="form-group">
                        <label htmlFor="exampleInputName1">ancienne mot de passe</label>
                        <input type="password" class="form-control" id="exampleInputName1" placeholder="old"  onChange={handleChange}  name='oldpassword'/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputName1">nouvelle mot de passe</label>
                        <input type="password" class="form-control" id="exampleInputName1" placeholder="new"  onChange={handleChange}  name='newpassword1'/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputName1">confirmation nouvelle mot de passe</label>
                        <input type="password" class="form-control" id="exampleInputName1" placeholder="confirmation"  onChange={handleChange}  name='newpassword2'/>
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
        <CodeValidation data={data} moi={codevalidation} newpassword={formData.newpassword1} ></CodeValidation>
        </>
       
    );

}