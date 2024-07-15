import React, { useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import Select from 'react-select';
export default function Recherche({
    mot,handlerRechercheSimple,choixElementDroitPF,reload,
    listefamille,selectedFamille,setSelectedFamille,
    listegroupe_article,selectedGroupe_article,setSelectGroupe_article,
    listetva,selectedTva,setSelectedTva,
    SubmitRecherche
}){
    const optionstva = listetva==null ? listetva.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptiontva, setSelectedOptiontva] = useState(selectedTva.label);
    const handleChangetva = (option) => {
        setSelectedOptiontva(option.label);
        setSelectedTva(option);
    };

    const optionsgroupe_article = listegroupe_article==null ? listegroupe_article.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptiongroupe_article, setSelectedOptiongroupe_article] = useState(selectedGroupe_article.label);
    const handleChangegroupe_article = (option) => {
        setSelectedOptiongroupe_article(option.label);
        setSelectGroupe_article(option);
    };

    const optionsfamille = listefamille!==null ? listefamille.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptionfamille, setSelectedOptionfamille] = useState(selectedFamille.label);
    const handleChangefamille = (option) => {
        setSelectedOptionfamille(option.label);
        setSelectedFamille(option);
    };
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
                    <form onSubmit={SubmitRecherche} class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Mot</label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder={mot} style={styles.backgroundColorDroit} onChange={handlerRechercheSimple}/>
                        </div>
                        <div class="form-group">
                            <label style={styles.titreGris}>Famille Article</label>
                            <Select
                                value={selectedOptionfamille}
                                onChange={handleChangefamille}
                                options={optionsfamille}
                                placeholder={selectedOptionfamille}
                            />
                        </div>
                        <div class="form-group">
                            <label style={styles.titreGris}>Groupe Article</label>
                            <Select
                                value={selectedOptiongroupe_article}
                                onChange={handleChangegroupe_article}
                                options={optionsgroupe_article}
                                placeholder={selectedOptiongroupe_article}
                            />
                        </div>
                        <div class="form-group">
                            <label style={styles.titreGris}>TVA</label>
                            <Select
                                value={selectedOptiontva}
                                onChange={handleChangetva}
                                options={optionstva}
                                placeholder={selectedOptiontva}
                            />
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