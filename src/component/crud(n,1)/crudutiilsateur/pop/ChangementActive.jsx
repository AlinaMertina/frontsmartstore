import React, { useRef,useState,useEffect }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';

export default function ChangementActive({lien,data,moi}){

    const [erroruplaod, setErroruplaod] = useState({
        color:'red',
        value:'Est-ce que vous voulez vraiment désactiver cette entité ?'
    });
   
    const [formData, setFormData] = useState(data);
    const suppresion = async () => {
        try {
            const lienv = config.lienCrudmetier+lien+"/active";
           
            // console.log(lienv);
            const response = await axios.put(lienv,formData);
                const responseData = response.data;
                if(responseData.data=='ok'){
                    close();
                    console.log(formData);
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
    useEffect(() => {
        setFormData({ ...formData, active:data.active=== 1 ? 0 : 1 });
        if (data.active !== 1) {
            setErroruplaod({ 
                color: 'green', 
                value: 'Est-ce que vous voulez vraiment activer cette entité ?' 
            });
        } 
    }, [data.active]);
    return(
    
        <div  ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                  <div className="col-md-8 textalignecenter">
                    <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        {erroruplaod.value}
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