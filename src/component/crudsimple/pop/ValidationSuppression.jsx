import React, { useRef }  from 'react';
import config from '../../../config/config';
import axios from 'axios';

export default function ValidationSuppression({lien,data,moi}){
  const suppresion = async () => {
    try {
      const response = await axios.delete(config.lienCrudmetier+lien+"/"+data.id);
      //gestion de erreur 
          const responseData = response.data;
          if(responseData.data=='ok'){
            close();
            window.location.reload();
          }else{
            console.log('kkk');
          }
    } catch (error) {
      console.error('There was an error deleting the entity!', error);
    }
  };
  const close = () => {
    moi.current.style.display='none';
  };
    return(
        <div  ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                  <div className="col-md-8 textalignecenter">
                    <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                      Vous volez vraiment supprimer  {data.nom}
                    </h3>
                    <div className="button-container">
                        <button type="button" className="btn btn-inverse-danger btn-fw" onClick={suppresion}>OUI</button>
                        <button type="button" className="btn btn-inverse-primary btn-fw" onClick={close}>NON</button>
                    </div>
                  </div>
                </div>
        </div>
    );

}