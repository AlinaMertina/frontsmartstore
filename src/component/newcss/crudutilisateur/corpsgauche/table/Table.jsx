import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Tr from './tr/Tr';
import Pagination from '../pagination/Pagination'
export default function Table({lien,setData,size,mot,valueforeignkey,setChoix,setValuemodif,data,dataselect}){
  console.log(data)
    return(
        <>
        <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                    <div class="card" style={styles.backgroundColorDroit}>
                      <div class="card-body" >
                        <h4 class="card-title titre"  style={styles.titreViollete}  >Utilisateurs</h4>
                        <p class="card-description">
                        Les entités non actives sont colorées
                        </p>
                        <div class="table-responsive">
                          <table class="table ">
                            <thead>
                              <tr>
                                <th style={styles.titreViollete}>Profil </th>
                                <th style={styles.titreViollete}>Nom </th>
                                <th style={styles.titreViollete}>Role </th>
                                <th style={styles.titreViollete}>Modifi Mot de passe </th>
                                <th style={styles.titreViollete}>Modifi Info user </th>
                              </tr>
                            </thead>
                            <tbody>
                              {data && data.map((value,index)=>(
                                <Tr key={index} data={value} dataselect={dataselect} setChoix={setChoix} setValuemodif={setValuemodif}></Tr>
                              ))
                              }
                            </tbody>
                          </table>
                        
                        </div>
                        <Pagination
                          lien={lien}
                          setData={setData}
                          size={size}
                          mot={mot}
                          valueforeignkey={valueforeignkey}
                        ></Pagination>
                      </div>
                    </div>
        </div>
        </>
    );
}