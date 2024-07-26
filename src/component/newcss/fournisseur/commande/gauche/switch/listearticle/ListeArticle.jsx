import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import Tr from './tr/Tr';
export default function ListeArticle({data,modificationValue,choixElementGauchePF}){
    return(
        <>
            <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                <div class="card" style={styles.backgroundColorDroit}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-11">
                            <h4 class="card-title titre"  style={styles.titreViollete}  >Prix article par fournisseur  </h4>
                        </div>
                        <div class="col-1">
                            <a   class="nav-link" onClick={choixElementGauchePF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="table-responsive" style={styles.overscroll}>
                        <table class="table ">
                        <thead style={styles.theadTh}>
                            <tr>
                                <th style={styles.titreViollete} >Fournisseur</th>
                                <th style={styles.titreViollete} >Article</th>
                                <th style={styles.titreViollete} >Designation</th>
                                <th style={styles.titreViollete} >Unitee</th> 
                                <th style={styles.titreViollete} >Prix unitaire</th> 
                                <th style={styles.titreViollete} >Commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((value,index)=>(
                                <Tr key={index} data={value} modificationValue={modificationValue} ></Tr>
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