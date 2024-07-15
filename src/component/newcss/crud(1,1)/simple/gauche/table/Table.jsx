import React  from 'react';
import styles from '../../../../../../datajson/style/style';
import Tr from './tr/Tr';
import StatiqueFonction from '../../../../../../statiquefonction/Fonction';
export default function Table({name,modificationValue,data,suivant,precedent,colonne}){
        const cellStyle = {
            float: 'right'
            };
    return(
        <>
        <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                    <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >
                        <h4 class="card-title titre"  style={styles.titreViollete}  >{name}</h4>
                        <p class="card-description">
                            Les entités non actives sont colorées
                        </p>
                        <div class="table-responsive">
                            <table class="table ">
                            <thead>
                                <tr>
                                    <th style={styles.titreViollete}>Id </th>
                                    {colonne && colonne.map((value)=>(
                                        <th style={styles.titreViollete}>{ StatiqueFonction.capitalizeFirstLetter(value)} </th>
                                    ))}
                                    <th style={styles.titreViollete}>Modification </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((value,index)=>(
                                    <Tr key={index} data={value} modificationValue={modificationValue} colonne={colonne}></Tr>
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