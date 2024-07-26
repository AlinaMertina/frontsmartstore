import React ,{useEffect, useRef,useState} from 'react';
import styles from '../../../../../../datajson/style/style';
import config from '../../../../../../config/config';
import axios from 'axios';
export default function Modification({data,
    choixElementDroit,reloadeDetaille}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const [valuec, setValue] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        data.qt=value;
        data.idutilisateur=id;
        data.date= new Date().toISOString();
        setValue(prevState => ({
            ...prevState,
            qt: value,
            idutilisateur: id,
            date: new Date(),
        }));

    };
    const submit = (e) => {    
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`commande_frns_detailles`;
        axios.put(lienvalue,data)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            reloadeDetaille();
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      
    };
    useEffect(()=>{
        // UpValue(index,data);
    },[valuec]);
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Prise de commande</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={()=>{choixElementDroit(2)}} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Fournisseur</label>
                            <input  class="typeahead" type="text" value={data.nomfournisseur} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Article</label>
                            <input  class="typeahead" type="text" value={data.nomarticle} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Designation</label>
                            <input  class="typeahead" type="text" value={data.designation} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Unitee</label>
                            <input  class="typeahead" type="text" value={data.nomunitee} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleSelectGender" style={styles.titreGris}>Quantitee</label>
                            <input  class="typeahead" type="text" value={data.qt}  name='qt' onChange={handleChange} />
                        </div>
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reload}><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
                </div>
        </>
    );
}

