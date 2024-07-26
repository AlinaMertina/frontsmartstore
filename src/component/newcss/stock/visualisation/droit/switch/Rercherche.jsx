import React  from 'react';
import styles from '../../../../../../datajson/style/style';
export default function Recherche({dataRecherche,setDataRecherche,
    doRecherche,
    realodRecherche,
    choixElementDroit}){
    const [active, setActive] = useState(dataRecherche.active== 1 ?'activer':'desactiver');
    const handler = async (e) => {
        const { name, value } = e.target;
        setDataRecherche(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const [isChecked, setIsChecked] = useState(dataRecherche.active==1 ? true :false); 
    const handleCheckboxChange = () => {
        setDataRecherche((prevState) => ({
          ...prevState,
          active: isChecked === true ? 0 :1
        }));
        setIsChecked((prevIsChecked) => !prevIsChecked);
        setActive(active=='activer' ? 'desactiver' :'activer')
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
                                <a   class="nav-link" onClick={(e)=>{choixElementDroit(e,2)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={doRecherche} class="forms-sample">
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Debut</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dataRecherche.debut} style={styles.backgroundColorDroit} onChange={handler} name='date1'/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Fin</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dataRecherche.fin} style={styles.backgroundColorDroit} onChange={handler} name='date2'/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Nom article</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dataRecherche.nomarticle} style={styles.backgroundColorDroit} onChange={handler} name='nom'/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1" style={styles.titreGris}>Designation</label>
                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder={dataRecherche.designation} style={styles.backgroundColorDroit} onChange={handler} name='designation'/>
                            </div>
                            <div class="form-group">
                             &nbsp;&nbsp; &nbsp;&nbsp;
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                                {active}
                                </label>
                             </div>
                            <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={realodRecherche} ><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

    
}