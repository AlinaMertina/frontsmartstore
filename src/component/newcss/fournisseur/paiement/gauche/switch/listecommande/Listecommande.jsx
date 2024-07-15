import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import Tr from './tr/Tr';
export default function Listecommande({data,detailleCommandeIdcom,setChoixGauche,
  suivant,precedent}){
    
      return(
          <>
          <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                      <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >
                        <div class="row">
                            <div class="col-11">
                                <h4 class="card-title titre"  style={styles.titreViollete}  >Fournisseur Non payee  </h4>
                            </div>
                            <div class="col-1">
                                    <a   class="nav-link" onClick={()=>{setChoixGauche(1)}} style={styles.titreViollete}>
                                        <i class="icon-grid menu-icon"></i>
                                    </a>
                                </div>
                        </div>
                          <div class="table-responsive" style={styles.overscroll}>
                            <table class="table ">
                              <thead>
                                <tr>
                                  <th style={styles.titreViollete}>Numero BC </th>
                                  <th style={styles.titreViollete}>Responsable </th>
                                  <th style={styles.titreViollete}>Date fin payement </th>
                                  <th style={styles.titreViollete}>Totale</th>
                                  <th style={styles.titreViollete}>Payee</th>
                                  <th style={styles.titreViollete}>Rest</th>
                                  <th style={styles.titreViollete}>Detaille</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data && data.map((value,index)=>(
                                  <Tr key={index} data={value} detailleCommandeIdcom={detailleCommandeIdcom}></Tr>
                                ))
                                }
                              </tbody>
                            </table>
                          </div>
                          <div className="col-lg-12  paginationnew" >
                            <div  className="btn-group">
                                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={precedent} ><i className="mdi mdi-arrow-left"></i></button>
                                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={suivant}><i className="mdi mdi-arrow-right"></i></button>
                            </div>
                          </div>

                        </div>
                      </div>
          </div>
          </>
      );
  }
