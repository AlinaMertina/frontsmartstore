import React ,{useEffect, useRef,useState} from 'react';
import styles from '../../../../../../../datajson/style/style';
import config from '../../../../../../../config/config';
import axios from 'axios';
export default function Datefinpayement({data1,setChoixDroit}){  
   
    const [data,setData] =useState(data1)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data,date:value})
        data1.date=value;
    };
    const submit = (e) => {
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`commande_frns_datefinpayements`;
        axios.post(lienvalue,data1)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
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
                            <p class="card-title ajout" style={styles.titreViollete}>Prise de commande</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={(e)=>{setChoixDroit(e,7)}} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Numero bon commande</label>
                            <input  class="typeahead" type="text" value={ data1!=null ?  data1.idcommande_frs :null} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Date fin payement</label>
                            <input  class="typeahead" type="date" placeholder={data1!=null ? data1.date :null} onChange={ handleChange} />
                        </div>
                       
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" ><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
                </div>
        </>
    );
}

