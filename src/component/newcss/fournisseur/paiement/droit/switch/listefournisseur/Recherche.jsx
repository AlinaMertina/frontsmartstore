import React, { useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
import Select from 'react-select';
export default function Recherche({listeFournisseur,
    submit,fournisseurSelected,setFournisseurSelected,
    setChoixDroit}){

    const options = listeFournisseur!==null ? listeFournisseur.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOption, setSelectedOption] = useState(fournisseurSelected==null ? "nom fournisseur": fournisseurSelected.label);
    const handleChange = (option) => {
        setSelectedOption(option.label);
        setFournisseurSelected(option);
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
                                <a   class="nav-link" onClick={()=>{setChoixDroit(e,2)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={(e)=>{submit(e,fournisseurSelected.value)}} class="forms-sample">
                            <div class="form-group">
                                <label style={styles.titreGris}>Fournisseur</label>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={options}
                                    placeholder={selectedOption}
                                />
                            </div>
                            <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-inverse-secondary btn-fw" ><i className='mdi mdi-autorenew'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}