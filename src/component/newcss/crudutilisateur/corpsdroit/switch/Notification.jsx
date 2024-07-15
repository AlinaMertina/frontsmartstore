import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import axios from 'axios';
export default function Notification({choix1,setChoix,nb1,nb2}){
  const notification=()=>{
      setChoix(1);
   }
    //display none du dive
    return(
        <>
                <div class="col-11  ml-3">
                            <div class="card" style={styles.backgroundColorGauche}>
                              <div class="card-body" >
                                <div class="row">
                                    <div class="col-10">
                                        <p class="card-title ajout" style={styles.titreViollete}> Notification</p>
                                    </div>

                                    <div class="col-2">
                                        <a   class="nav-link" onClick={notification} style={styles.titreViollete}>
                                            <i class="icon-grid menu-icon"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="preview-list" >
                                  
                                    <a class="dropdown-item preview-item">
                                      <div class="preview-thumbnail">
                                        <div class="preview-icon bg-success" style={styles.backgroundColorGauche}>
                                          <i class="ti-info-alt mx-0 iconeaffichage" ></i>
                                        </div>
                                      </div>
                                      <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal" style={styles.titreGris}>Application Error</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                          Just now
                                        </p>
                                      </div>
                                    </a>
                                    <a class="dropdown-item preview-item">
                                      <div class="preview-thumbnail">
                                        <div class="preview-icon bg-warning">
                                          <i class="ti-settings mx-0"></i>
                                        </div>
                                      </div>
                                      <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal" style={styles.titreGris}>Settings</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                          Private message
                                        </p>
                                      </div>
                                    </a>
                                    <a class="dropdown-item preview-item">
                                      <div class="preview-thumbnail">
                                        <div class="preview-icon bg-info">
                                          <i class="ti-user mx-0"></i>
                                        </div>
                                      </div>
                                      <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-normal" style={styles.titreGris}>New user registration</h6>
                                        <p class="font-weight-light small-text mb-0 text-muted">
                                          2 days ago
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}