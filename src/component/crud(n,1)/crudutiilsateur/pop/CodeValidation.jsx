import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import StatiqueFonction from '../../../../statiquefonction/Fonction';

export default function CodeValidation({moi,data,newpassword}){
    // modification de donne id,nom
    const close = () => {
        console.log('tokony i fody za ')
        moi.current.style.display='none';
    };

    const [formData, setFormData] = useState({
        code1:'',
        code2:'',
        code3:'',
        code4:''
    });
    const [erroruplaod, setErroruplaod] = useState({
        color:'red',
        value:''
      });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //requette de changement 
    const submit = async (e) => {
        e.preventDefault();
        const code = formData.code1+formData.code2+formData.code3+formData.code4;
        const lien = config.lienCrudmetier+'utilisateurs/code/'+data.id+'/'+code+'/'+newpassword;
        console.log(lien);
        axios.put(lien)
        .then(response => {
          const responseData = response.data;
          console.log(responseData.data);
          if (responseData.data!=null) {
              close();
              window.location.reload();
          } else {
            setErroruplaod({ ...erroruplaod, value: "code not valide veillez consulte votre email", color: 'red' });
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
          });
    };
    
   
    useEffect( () => {
       
    }, [formData]);
    
    return(
        <>
        <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop" style={{ height: '300px' }}>
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                <h2 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                    L'ancien mot de passe que vous avez saisi est invalide
                </h2>
                <p>Pour valider le changement de mot de passe, veuillez entrer le code qui vous a été envoyé par e-mail.</p>
                <p style={{ color: erroruplaod.color }}>{erroruplaod.value}</p>

                <form className="forms-sample" onSubmit={submit} >
                    <div class=" form-group row justify-content-center mt-1">
                        <div class="col-2">
                            <input type="text" maxlength="1" class="form-control code-input" name="code1" onChange={handleChange}/>
                        </div>
                        <div class="col-2">
                            <input type="text" maxlength="1" class="form-control code-input" name="code2" onChange={handleChange} />
                        </div>
                        <div class="col-2">
                            <input type="text" maxlength="1" class="form-control code-input" name="code3" onChange={handleChange}/>
                        </div>
                        <div class="col-2">
                            <input type="text" maxlength="1" class="form-control code-input" name="code4" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-inverse-danger btn-fw">OUI</button>
                        <button type="button" className="btn btn-inverse-primary btn-fw" onSubmit={close}>NON</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
        
    );

}