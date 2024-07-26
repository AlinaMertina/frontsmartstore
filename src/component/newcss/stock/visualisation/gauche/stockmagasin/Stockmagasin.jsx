import React  from 'react';
import styles from '../../../../../../datajson/style/style';

export default function Stockmagasin({data,suivant,precedent,choixElementGauche,listemagasinprint}){

    return(
        <>
            <div class="col-lg-12 grid-margin stretch-card tablecrud" style={styles.tailleGauche} >
                <div class="card" style={styles.backgroundColorDroit}>
                    <div class="card-body" >
                        <div class="row">
                            <div class="col-11">
                                <h4 class="card-title titre"  style={styles.titreViollete}  >Visuelle stock par magasin </h4>
                            </div>
                            <div class="col-1">
                                <a   class="nav-link" onClick={(e)=>{choixElementGauche(e,1)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="table-responsive" style={styles.overscroll}>
                            <table class="table ">
                            <thead style={styles.theadTh}>
                                <tr>
                                    <th style={styles.titreViollete} >Article</th>
                                    <th style={styles.titreViollete} >Designation</th>
                                    <th style={styles.titreViollete} >Unitee</th>
                                    {listemagasinprint.map((value, index) => (
                                        <th key={index} style={styles.titreGris}>
                                            {value}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((value,index)=>(
                                    <Tr key={index} data={value} listemagasinprint={listemagasinprint} ></Tr>
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