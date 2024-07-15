import React,{useRef,useState,useEffect}  from 'react';
import Tr from './tr/Tr';
import axios from 'axios';
import config from '../../../../../../config/config';
import styles from '../../../../../../datajson/style/style';
export default function Table({data,setData,choix,idselect}){
    const updateValue = (index, newValue) => {
        const updatedValues = data.map((item, idx) =>
        idx === index ? newValue : item
        );
        setData(updatedValues);
    };
    const submit = async (e) => {
        e.preventDefault();
        //ataovy mi relode eto de avi eo ataovy manao redirecte eto 
        // console.log(data);
        axios.post(config.lienCrudmetier+`article_prixs/${choix}/${idselect}`,data)
        .then(response => {
            const responseData = response.data;
            console.log(responseData);
            if(responseData.data=='ok'){
                // window.location.reload();
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
                                        <div class="col-12">
                                            <h4 class="card-title titre"  style={styles.titreViollete}  >Liste Article  &nbsp;&nbsp;
                                                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{setChoixGauche(2)}}><i className="mdi mdi-plus"></i></button>
                                            </h4>
                                        </div>
                                </div>
                                <p class="card-description">
                                   
                                </p>
                                <div class="table-responsive">
                                    <table class="table ">
                                    <thead>
                                        <tr>
                                            <th style={styles.titreViollete} >Unitee</th>
                                            <th style={styles.titreViollete} >Quantitee</th>
                                            {choix && choix===2 ? (
                                                <td style={styles.titreViollete} >Quantitee article</td>
                                                )
                                            : null }            
                                            <th style={styles.titreViollete} >Prix</th>
                                            <th style={styles.titreViollete} >Nom utilisateur</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((value,index)=>(
                                            <Tr key={index} index={index} data={value} upData={updateValue}  idselect={idselect} choix={choix} ></Tr>
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
