import React  from 'react';
import Select from 'react-select';
export default function Entrer({
    infoEntreStock,setInfoEntrerStock,
    listefournisseur,listemagasin,
    choixElementDroitPF,
    setListeArticlefrns}){
    const handleChange = (e) => {
        setInfoEntrerStock({ ...infoEntreStock, [e.target.name]: e.target.value });
        // console.log(formData.nom);
    };
    const options = listefournisseur!==null ? listefournisseur.map(item => ({
        value: item.id,
        label: item.code
    })) : null;
    const [selectedOption, setSelectedOption] = useState(infoEntreStock!=null ? infoEntreStock.nomfournisseur : "code fournisseur" );
    const handleChangeselect = (option) => {
        setSelectedOption(option.label);
        setInfoEntrerStock({ ...infoEntreStock, idfournisseur: option.value,nomfournisseur:options.label });

    };


   
    const optionsmagasin = listemagasin!==null ? listemagasin.map(item => ({
        value: item.id,
        label: item.code
    })) : null;
    const [selectedOptionmagasin, setSelectedOptionmagasin] = useState(infoEntreStock!=null ? infoEntreStock.nommagasin : "nom magasin");
    const handleChangeselectmagasin = (option) => {
        setSelectedOption(option.label);
        setInfoEntrerStock({ ...infoEntreStock, idmagasin: option.value });
    };

    const getListeArticleFournisseur= async () => {
        var lienvalue = config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setData(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
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
                              <label for="exampleInputUsername1" style={styles.titreGris}>Fournisseur</label>
                              <Select 
                                      value={selectedOption}
                                      onChange={handleChangeselect}
                                      options={options}
                                      placeholder={selectedOption}
                                  />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Numero Bon commande</label>
                              <input type="date" class="form-control" id="exampleInputUsername1"  placeholder={infoEntreStock!=null ? infoEntreStock.idboncommande: null}  onChange={handleChange} style={styles.backgroundColorDroit} name='date'/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1" style={styles.titreGris}>Date</label>
                              <input type="date" class="form-control" id="exampleInputUsername1"  placeholder={infoEntreStock!=null ? infoEntreStock.date: null}  onChange={handleChange} style={styles.backgroundColorDroit} name='date'/>
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
