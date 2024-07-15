import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
export default function Recherche({mot,
    handlerRechercheSimple,SubmitRechercheSimple,choixElementDroitPF,reload}){
        return(
            <>
                <div class="col-11  ml-3">
                    <div class="card" style={styles.backgroundColorGauche}>
                        <div class="card-body" >
                        <div class="row">
                            <div class="col-10">
                                <p class="card-title ajout" style={styles.titreViollete}> Recherche</p>
                            </div>
    
                            <div class="col-2">
                                <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={SubmitRechercheSimple} class="forms-sample">
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Mot</label>
                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder={mot} style={styles.backgroundColorDroit} onChange={handlerRechercheSimple}/>
                            </div>
                           
                            <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reload}><i className='mdi mdi-autorenew'></i></button>
                            </form>
                        </div>
                    </div>
                    </div>
            </>
        );

}