import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import Tr from './tr/Tr';
export default function Visualisation({data,modification,suppression,
    choixElementGauchePF,Enregistrement}){
    return(
        <>
            <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                <div class="card" style={styles.backgroundColorDroit}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-11">
                            <h4 class="card-title titre"  style={styles.titreViollete}  >Commande  </h4>
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
                                <th style={styles.titreViollete} >Quantitee</th> 
                                <th style={styles.titreViollete} >Modification</th>
                                <th style={styles.titreViollete} >Suppression</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((value,index)=>(
                                <Tr key={index}  index={index} data={value} modification={modification} suppression={suppression}> </Tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    <div className="col-lg-12  paginationnew" >
                            <div  className="btn-group">
                                <button type="button"  onClick={Enregistrement} className="btn btn-primary mr-2">fixe</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
