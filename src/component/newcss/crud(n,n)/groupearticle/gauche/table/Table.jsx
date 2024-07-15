import React  from 'react';
import styles from '../../../../../../datajson/style/style';
import Tr from './tr/Tr';
export default function Table({setUpaDataChoix,precedent,suivant,data,setChoixGauche,choixElementGauchePF}){
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
                                    <h4 class="card-title titre"  style={styles.titreViollete}  >Liste Groupe  &nbsp;&nbsp;
                                        <button type="button" className="btn btn-inverse-primary btn-fw" onClick={()=>{setChoixGauche(3)}}><i className="mdi mdi-plus"></i></button>
                                    </h4>
                                </div>
                                <div class="col-1">
                                    <a   class="nav-link" onClick={choixElementGauchePF} style={styles.titreViollete}>
                                        <i class="icon-grid menu-icon"></i>
                                    </a>
                                </div>
                        </div>
                        <p class="card-description">
                            Les entités non actives sont colorées
                        </p>
                        <div class="table-responsive">
                            <table class="table ">
                            <thead>
                                <tr>
                                    <th style={styles.titreViollete}>Id </th>
                                    <th style={styles.titreViollete}>Nom </th>
                                    <th style={styles.titreViollete}>Famille </th>
                                    <th style={styles.titreViollete}>TVA </th>
                                    <th style={styles.titreViollete}>Type de gestion </th>
                                    <th style={styles.titreViollete}>Modification </th>
                                    <th style={styles.titreViollete}>Article </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((value,index)=>(
                                    <Tr key={index} data={value} setUpaDataChoix={setUpaDataChoix} ></Tr>
                                    ))
                                }
                            </tbody>
                            </table>
                        </div>
                        <div className="col-lg-12  paginationnew" >
                            <div style={cellStyle} className="btn-group">
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