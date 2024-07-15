import React,{useEffect, useRef,useState}  from 'react';
import axios from 'axios';
import config from '../../../../../../config/config';
import Table from './table/Table';
import styles from '../../../../../../datajson/style/style';
import Select from 'react-select';
export default function Ajout({listefamille,listetva,listetypegestion,listeunitee,upData,choixElementGauchePF}){

    // declaration variable
    const cellStyle = {
        textAlign: 'center',
     };
    const Formadata= {
        groupe_article:{
            nom: '',
            idfamille_article:'',
            idtva:'',
            idtypegestion:''
        },
        uniteegroupearticle:[]
    }
    const [active, setActive] = useState(upData && upData.groupe_article.active== 1 ?'activer':'desactiver');
    const [isChecked, setIsChecked] = useState(upData &&  upData.groupe_article.active==1 ? true :false); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
      setFormData((prevState) => ({
        ...prevState,
        groupe_article:{
            active: isChecked === true ? 0 :1
        }
      }));
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setActive(active=='activer' ? 'desactiver' :'activer')
    };

    const [errorduplicateunitee, setErrorduplicateunitee] = useState('');
    const [formData, setFormData] = useState(upData==null ? Formadata : upData );
    //declaration variable
    //fonction
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            groupe_article: {
                ...prevState.groupe_article,
                [name]: value
            }
        }));
    };
    const addUnitee = (newUnitee) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            uniteegroupearticle: [...prevFormData.uniteegroupearticle, newUnitee]
        }));
    };
    const removeUnitee = (newListe) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            uniteegroupearticle: newListe
        }));
    };
    const optionstva = listetva!==null ? listetva.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptiontva, setSelectedOptiontva] = useState(upData==null ? 'TVA' : upData.groupe_article.nomtva);
    const handleChangetva = (option) => {
        setSelectedOptiontva(option.label);
        const { name, value } =option;
            setFormData(prevState => ({
        ...prevState,
        groupe_article: {
            ...prevState.groupe_article,
            ['idtva']: value
        }
        }));
        console.log(formData);
    };
    const optionsfamille = listefamille!==null ? listefamille.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptionfamille, setSelectedOptionfamille] = useState(upData==null ? 'Famille' : upData.groupe_article.nomfamille_article);
    const handleChangefamille = (option) => {
        setSelectedOptionfamille(option.label);
        const { name, value } =option;
            setFormData(prevState => ({
        ...prevState,
        groupe_article: {
            ...prevState.groupe_article,
            ['idfamille_article']: value
        }
        }));
        console.log(formData);
    };
    const optionstypegestion = listetypegestion!==null ? listetypegestion.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
        const [selectedOptiontypegestion, setSelectedOptiontypegestion] = useState(upData==null ? 'Typegestion' : upData.groupe_article.nomtypegestion);
        const handleChangetypegestion = (option) => {
            setSelectedOptiontypegestion(option.label)
            const { name, value } =option;
                setFormData(prevState => ({
            ...prevState,
            groupe_article: {
                ...prevState.groupe_article,
                ['idtypegestion']: value
            }
            }));
    };
    const checkForDuplicates = () => {
        for(let i=0;i<formData.uniteegroupearticle.length;i++){
            for(let a=0;a<formData.uniteegroupearticle.length;a++){
                if(i!=a){
                    if(formData.uniteegroupearticle[i].nomunitee==formData.uniteegroupearticle[a].nomunitee){
                        setErrorduplicateunitee("Il ne devrait pas y avoir de duplication d'unitee");
                        return false;
                    }
                }
            }
        }
        return true;
    };
    const submit = async (e) => {
        e.preventDefault();
        checkForDuplicates();
        console.log(formData);
        if(checkForDuplicates()==false){
            console.log(formData.uniteegroupearticle)
                return ;            
        }
        {upData == null ? (
            axios.post(config.lienCrudmetier+'groupe_articles',formData)
            .then(response => {
                const responseData = response.data;
                console.log(responseData);
                if(responseData.data=='ok'){
                    close();
                    window.location.reload();
                // reInitialisationVu(0,size);
                }else{
                // setError('Duplication de nom ou  probleme serveur ')
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
            })
        ) : (
            // console.log("update")
            // console.log(formData)
            axios.put(config.lienCrudmetier+'groupe_articles/'+formData.groupe_article.id,formData)
            .then(response => {
                const responseData = response.data;
                console.log(responseData);
                if(responseData.data=='ok'){
                    close();
                    window.location.reload();
                // reInitialisationVu(0,size);
                }else{
                // setError('Duplication de nom ou  probleme serveur ')
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
            })
        )
        }
       
    };
    return(
        <>
        <div class="col-lg-12 grid-margin stretch-card tablecrud" style={{height:'82vh'}} >
                    <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >

                        <div class="row">
                                <div class="col-11">
                                <h4 class="card-title titre" style={styles.titreViollete} >Ajout Nouvelle Groupe</h4>
                                </div>

                            <div class="col-1">
                                <a   class="nav-link" onClick={choixElementGauchePF} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <form onSubmit={submit}  className="forms-sample">
                            <div class="form-group row">
                                <div class="col">
                                    <label style={styles.titreGris}>Nom Groupe</label>
                                    <div id="the-basics">
                                        <input class="typeahead" type="text" placeholder={upData==null ? 'Nom groupe' : upData.groupe_article.nomgroupe} onChange={handleChange} name='nom' style={styles.backgroundColorGauche}/>
                                    </div>
                                </div>
                                <div class="col">
                                    <label style={styles.titreGris}>Famille Article</label>
                                    <Select
                                        value={selectedOptionfamille}
                                        onChange={handleChangefamille}
                                        options={optionsfamille}
                                        placeholder={selectedOptionfamille}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col">
                                    <label style={styles.titreGris}>TVA</label>
                                    <Select
                                        value={selectedOptiontva}
                                        onChange={handleChangetva}
                                        options={optionstva}
                                        placeholder={selectedOptiontva}
                                    />
                                </div>
                                <div class="col">
                                    <label style={styles.titreGris}>Type de Gestion</label>
                                    <Select
                                        value={selectedOptiontypegestion}
                                        onChange={handleChangetypegestion}
                                        options={optionstypegestion}
                                        placeholder={selectedOptiontypegestion}
                                    />
                                </div>
                            </div>
                            {upData==null ? null : (
                                <div className='form-group'>
                                    <label class=" form-check-label" style={styles.titreGris}>
                                    &nbsp;&nbsp;  &nbsp;&nbsp;  <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                                        {active}
                                    </label>
                                </div>
                                ) 
                            }
                            <Table removeUnitee={removeUnitee}
                             addListeUnitee={addUnitee} 
                            listeunitee={listeunitee} error={errorduplicateunitee} uniteemodification={upData==null ? null : upData.uniteegroupearticle} 
                            idgroupe={upData==null ? null : upData.groupe_article.id }></Table>
                            <div className="col-lg-12  paginationnew" >
                                <div  className="btn-group">
                                    <button type="submit"  className="btn btn-inverse-primary btn-fw" >cree</button>
                                </div>
                            </div>

                        </form>
                        </div>
                    </div>
        </div>
        </>
    );
    //fonction

}