import React,{useRef,useState,useEffect}  from 'react';
import Tr from './tr/Tr';
import axios from 'axios';
import config from '../../../../../../config/config';
import styles from '../../../../../../datajson/style/style';
export default function Table({data,setData,nomfournisseur,choixElementGauchePF,setChoixGauche,getData}){
    const updateValue = (index, newValue) => {
        const updatedValues = data.map((item, idx) =>
        idx === index ? newValue : item
        );
        setData(updatedValues);
    };
    const submit = async (e) => {
        e.preventDefault();
        //ataovy mi relode eto de avi eo ataovy manao redirecte eto 
        console.log(data);
        axios.post(config.lienCrudmetier+`fournisseur_articles`,data)
        .then(response => {
            const responseData = response.data;
            console.log(responseData);
            if(responseData.data=='ok'){
                // getData();
                
                setChoixGauche(1);
            // reInitialisationVu(0,size);
            }else{
            // setError('Duplication de nom ou  probleme serveur ')
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
        });
    };
    const cellStyle = {
        float: 'right'
    };
    return(
            <>
                <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                    <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >
                        <div class="row">
                            <div class="col-11">
                                <h4 class="card-title titre"  style={styles.titreViollete}  >Liste Prix Article {nomfournisseur}  &nbsp;&nbsp;
                                </h4>
                            </div>
                            <div class="col-1">
                                <a   class="nav-link" onClick={choixElementGauchePF} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                            <p class="card-description">
                                
                            </p>
                        <div class="table-responsive">
                            <table class="table ">
                            <thead>
                                <tr>
                                    <th style={styles.titreViollete} >Designation</th>
                                    <th style={styles.titreViollete} >Unitee</th>
                                    <th style={styles.titreViollete} >Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((value,index)=>(
                                    <Tr key={index} index={index} data={value} modificationValue={updateValue}  ></Tr>
                                    ))
                                }
                            </tbody>
                            </table>
                        </div>
                        <div className="col-lg-12  paginationnew" >
                            <div style={cellStyle} className="btn-group">
                                <button type="button"  onClick={submit} className="btn btn-primary mr-2">fixe</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
    );


}