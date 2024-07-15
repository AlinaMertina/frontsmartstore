import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import axios from 'axios';
import config from '../../../../../../config/config';
export default function FixeDate({data,reloadeDetaille,choixElementDroit,reload}){
    console.log(data)
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;

    const handler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // UpValue(  index,data);
        data.datelivraison=value;
        data.idutilisateur=id;
        data.date= new Date().toISOString();
        data.idetat= 2;
    };
    const submit = (e) => {
        e.preventDefault();
        axios.post(config.lienCrudmetier+'commande_frns_detailles',data)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            reloadeDetaille()
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
                            <label for="exampleInputUsername1" style={styles.titreGris}>Artcile</label>
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
                            <input  class="typeahead" type="text" value={data.qt}  name='qt' readOnly/>
                        </div>
                        <div class="form-group">
                            <label for="exampleSelectGender" style={styles.titreGris}>Date de livraison</label>
                            <input  class="typeahead" type="date"   name='datelivraison' onChange={handler} />
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
