import React, { useEffect, useRef,useState }  from 'react';
import Select from 'react-select';
import styles from '../../../../../../datajson/style/style';
export default function Recherche({listArticle,setIdArticle,choixDroitPF}){
    const options = listArticle!==null ? listArticle.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    const [value, setValue] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChangeselect = (option) => {
        setSelectedOption(option.label);
        setIdArticle(option);
        setValue(option);
    };
    const doSearch = async (e) => {
        e.preventDefault();
        setIdArticle(value);
    };
    const reinitialisation = async (e) => {
        e.preventDefault();
        window.location.reload();
      };
      return(
        <>
        <div class="col-11  ml-3">
            <div class="card" style={styles.backgroundColorGauche}>
                <div class="card-body" >
                <div class="row">
                    <div class="col-10">
                        <p class="card-title ajout" style={styles.titreViollete}>Recherche Article</p>
                    </div>
                    <div class="col-2">
                        <a   class="nav-link" onClick={choixDroitPF} style={styles.titreViollete}>
                            <i class="icon-grid menu-icon"></i>
                        </a>
                    </div>
                </div>
                <form onSubmit={doSearch} class="forms-sample">
                    
                    <div class="form-group">
                        <label for="exampleSelectGender" style={styles.titreGris}>Gender</label>

                        <Select  styles={styles.select}
                                    value={selectedOption}
                                    onChange={handleChangeselect}
                                    options={options}
                                    placeholder={selectedOption}
                                />
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
