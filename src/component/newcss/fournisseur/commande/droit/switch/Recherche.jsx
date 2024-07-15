import React, { useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import Select from 'react-select';
export default function Recherche({listeArticle,
    submit,reload,
    articleSelected,setArticleSelected,
    choixElementDroitPF}){

    const options = listeArticle!==null ? listeArticle.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOption, setSelectedOption] = useState(articleSelected.label);
    const handleChange = (option) => {
        setSelectedOption(option.label);
        setArticleSelected(option);
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
                                <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={submit} class="forms-sample">
                            <div class="form-group">
                                <label style={styles.titreGris}>Article</label>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder={selectedOption}
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