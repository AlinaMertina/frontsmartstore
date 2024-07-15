import React ,{useEffect, useRef,useState} from 'react';
import styles from '../../../../../../../datajson/style/style';
import config from '../../../../../../../config/config';
import axios from 'axios';
export default function Saisiepayement({data1,setChoixDroit}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const [data,setData] =useState(data1)
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log([name,value])
        setData({ ...data, [name]: value,idutilisateur:id});
    };
    const submit = (e) => {
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`commande_frns_payements`;
        axios.post(lienvalue,data)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setData({ ...data, montant: value,idutilisateur:id,date:null});
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Payement</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={(e)=>{setChoixDroit(e,7)}} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Montant</label>
                            <input  class="typeahead" type="text" placeholder={'0.0'}  name='montant' onChange={ handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Date</label>
                            <input  class="typeahead" type="date"  onChange={handleChange}  name='date'/>
                        </div>
                       
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw"><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
                </div>
        </>
    );
}
