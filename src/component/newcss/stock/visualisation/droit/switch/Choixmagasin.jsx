import React  from 'react';
import styles from '../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../statiquefonction/Fonction';
export default function Choixmagasin({suivant,precedent,listecolonne,setColonneaffiche}){
   
    const changeColonne = (index) => {
        setColonneaffiche(
            listecolonne.map((item, idx) =>
            idx === index ? { ...item, active: item.active === 1 ? 0 : 1 } : item
        )
        );
        setData(prevData =>
            prevData.map((item, idx) =>
                idx === index ? { ...item, active: item.active === 1 ? 0 : 1 } : item
            )
        );
    };
    
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                        <div class="row">
                            <div class="col-10">
                                <p class="card-title ajout" style={styles.titreViollete}>Recherche</p>
                            </div>

                            <div class="col-2">
                                <a   class="nav-link" onClick={(e)=>{setChoixDroit(e,7)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>

                      
                        <form  class="forms-sample">
                           {listecolonne.map((value,index)=>(
                                <div class="form-check mx-sm-2">
                                    <label class="form-check-label" style={styles.titreGris}>
                                        <input type="checkbox" class="form-check-input" checked={value.active==1 ? true :false} onChange={(e)=>{changeColonne(e,index)}} />
                                        {value.nom}
                                    </label>
                                </div>
                            ))
                           }
                            <button type="button" class="btn btn-inverse-primary btn-fw" onClick={precedent}><i className="mdi mdi-arrow-left"></i></button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={suivant}><i className="mdi mdi-arrow-right"></i></button>
                        </form>
                        
                       
                    </div>
                </div>
            </div>
        </>
    );
}
