import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Select from 'react-select';
import config from '../../../../../config/config';
import axios from 'axios';
export default function Recherche({setMot,mot,choix1,setChoix,doSearch}){
    const handleChange = (e) => {
        setMot(e.target.value);
    };
    const reinitialisation = async (e) => {
       setMot('null');
    };
    const [choix, setValue] = useState(choix1);
    const notification=(e)=>{
        e.preventDefault();
        setChoix(choix==2 ? 3:2 );
        setValue(choix==2 ? 3:2);
     }

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
                            <a   class="nav-link" onClick={notification} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={doSearch} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Titre</label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder={mot} style={styles.backgroundColorDroit} onChange={handleChange}/>
                        </div>
                       
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reinitialisation}><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
                </div>
        </>
    );
}