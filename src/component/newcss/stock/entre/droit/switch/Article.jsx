import React, { useEffect, useRef,useState }   from 'react';
import Select from 'react-select';

export default function Article({index,listeArticle}){
    const [value,setValue]=useState({
        idunitee_article:"",
        idarticle:"",
        qt:""
    });
    

    const options = listeArticle!==null ? listeArticle.map(item => ({
        value: item.id,
        label: item.code
    })) : null;
    const [selectedOption, setSelectedOption] = useState("code fournisseur");
    const handleChangeselect = (option) => {
        setSelectedOption(option.label);
        setInfoEntrerStock({ ...infoEntreStock, idfournisseur: option.value });
    };
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Entrer Stock</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={submit} class="forms-sample">
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Magasin</label>
                              <Select 
                                      value={selectedOptionmagasin}
                                      onChange={handleChangeselectmagasin}
                                      options={optionsmagasin}
                                      placeholder={selectedOptionmagasin}
                                  />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Code Fournisseur</label>
                              <Select 
                                      value={selectedOption}
                                      onChange={handleChangeselect}
                                      options={options}
                                      placeholder={selectedOption}
                                  />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Date</label>
                              <input type="date" class="form-control" id="exampleInputUsername1"  placeholder={data.email}  onChange={handleChange} style={styles.backgroundColorDroit} name='date'/>
                            </div>
                        <button type="submit" class="btn btn-inverse-primary btn-fw"><i className='mdi mdi-check'></i></button>
                        {/* &nbsp;&nbsp; */}
                        {/* <button type="button" class="btn btn-inverse-secondary btn-fw" onClick={reload}><i className='mdi mdi-autorenew'></i></button> */}
                    </form>
                    </div>
                </div>
            </div>
        </>
    );

}
