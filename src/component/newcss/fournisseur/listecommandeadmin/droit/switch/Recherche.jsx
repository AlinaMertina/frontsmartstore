import React, { useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
export default function Recherche({choixElementDroit,dateBetween,setDateBetween,reload,submit}){

  
    const handler = async (e) => {
        const { name, value } = e.target;
        setDateBetween(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                <a   class="nav-link" onClick={()=>{choixElementDroit(1)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={submit} class="forms-sample">
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Debut</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dateBetween.date1} style={styles.backgroundColorDroit} onChange={handler} name='date1'/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Fin</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dateBetween.date2} style={styles.backgroundColorDroit} onChange={handler} name='date2'/>
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


