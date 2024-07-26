import React,{useEffect, useRef,useState}  from 'react';
import styles from '../../../../../../datajson/style/style';
import config from '../../../../../../config/config';
import axios from 'axios';
export default function Modification({data,fModificationValuePrix,choixDroitPF,reload,setChoixGaucheData}){
    const [value, setValue] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        data.pu=value;
    };
    const submit = (e) => {
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`fournisseur_articles`;
        // console.log(lienvalue);
        axios.put(lienvalue,data)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            // window.location.reload();
            setChoixGaucheData(1);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
        fModificationValuePrix(data)
    };

    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Modification</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={choixDroitPF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
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
                            <label for="exampleSelectGender" style={styles.titreGris}>Prix</label>
                            <input  class="typeahead" type="text" placeholder={data.pu}  name='pu' onChange={handleChange} />
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
