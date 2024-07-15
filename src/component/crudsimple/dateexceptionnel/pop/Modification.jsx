import React,{useRef,useState}  from 'react';
import axios from 'axios';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
import config from '../../../../config/config';
export default function Modification({data,moi}){
    // declaration variable
    const [error, setError] = useState('');
    const [formData, setFormData] = useState(data);
    const [isChecked, setIsChecked] = useState(data.active==1 ? true :false);
    const [active, setActive] = useState(data.active== 1 ?'activer':'desactiver');
    //fin declaration variable

    // handler fonction 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCheckboxChange = () => {
        setFormData((prevState) => ({
          ...prevState,
          active: isChecked === true ? 0 :1
        }));
        setIsChecked((prevIsChecked) => !prevIsChecked);
        setActive(active=='activer' ? 'desactiver' :'activer')
      };
    const close = () => {
        moi.current.style.display='none';
    };
    //fin handler fonction

    const submit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const dateToCompare = new Date(formData.debut);
        const dateToComparefin = new Date(formData.fin);
        currentDate.setHours(0, 0, 0, 0);
        dateToCompare.setHours(0, 0, 0, 0);
        dateToComparefin.setHours(0, 0, 0, 0);
        if (dateToCompare < currentDate) {
            setError('La date de début doit être supérieure  à la date d\'aujourd\'hui');
        } 
        if (dateToCompare > dateToComparefin) {
            console.log('valueee ');
            setError('La date de début doit être inférieure  à la date fin');
        } 
        axios.put(config.lienCrudmetier+'date_exceptionnels',formData)
        .then(response => {
          const responseData = response.data;
          if(responseData.data=='ok'){
            close();
          }else{
            setError('Duplication de nom ou  probleme serveur ')
          }
        })
        .catch(error => {
            console.error('Erreur lors de la modification :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
        });
    };
    return(
        <>
          <div  ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                    <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                       Modification Date 
                    </h3>
                    <form onSubmit={submit}  className="forms-sample">
                        <p style={{color:'red'}}>{error}</p>
                        <div className="form-group">
                            <label>{StatiqueFonction.formatDate(data.debut)}</label>
                            <input type="date" className="form-control" id="exampleInputUsername1"  onChange={handleChange} placeholder="debut" name='debut'/>
                        </div>
                        <div className="form-group">
                            <label>{StatiqueFonction.formatDate(data.fin)}</label>
                            <input type="date" className="form-control" id="exampleInputUsername1"  onChange={handleChange} placeholder="fin" name='fin'/>
                        </div>
                        <div class="form-group row">
                            <div class="col">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                              {active}
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">modification</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    );
}
