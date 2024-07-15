import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import Tr from './tr/Tr';
export default function Fournisseurnonpayee({data,detailleCommandeFrns}){
    
      return(
          <>
          <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                      <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >
                            <div class="row">
                                <div class="col-12">
                                    <h4 class="card-title titre"  style={styles.titreViollete}  >Liste des fournisseurs non payés  </h4>
                                </div>
                                {/* <div class="col-1">
                                    <a   class="nav-link" onClick={()=>{setChoixGauche(1)}} style={styles.titreViollete}>
                                        <i class="icon-grid menu-icon"></i>
                                    </a>
                                </div> */}
                            </div>
                          <div class="table-responsive" style={styles.overscroll}>
                            <table class="table ">
                              <thead>
                                <tr>
                                  <th style={styles.titreViollete}>Code </th>
                                  <th style={styles.titreViollete}>Nom </th>
                                  <th style={styles.titreViollete}>Detaille </th>
                                </tr>
                              </thead>
                              <tbody>
                                {data && data.map((value,index)=>(
                                  <Tr key={index} data={value} detailleCommandeFrns={detailleCommandeFrns}></Tr>
                                ))
                                }
                              </tbody>
                            </table>
                          
                          </div>
                        </div>
                      </div>
          </div>
          </>
      );
  }
