import React,{useEffect, useRef,useState}  from 'react';
import axios from 'axios';
import config from '../../../../../../../config/config';
import styles from '../../../../../../../datajson/style/style';
import Select from 'react-select';
import Table from '../../../../groupearticle/gauche/ajout/table/Table';
export default function Ajout({upData,listegroupe_article,listeunitee,choixElementGauchePF}){
    //declaration de variable 
    const Formadata= {
        article:{
            nom: '',
            idgroupe:''
        },
        uniteearticle:[]
    }
    const [detailleListeGroupeArticle, setDetailleListeGroupeArticle] = useState(upData == Formadata ? null : upData);
    const [errorduplicateunitee, setErrorDuplicationUnitee] = useState('');
    const [listeuniteeArticle, setListeuniteeArticle] = useState(upData==null ? [] : upData.uniteearticle);
    const [formData, setFormData] = useState(upData==null ? Formadata : upData);
    //fin declaration de variable
    //fonction
    const [active, setActive] = useState(upData && upData.article.active== 1 ?'activer':'desactiver');
    const [isChecked, setIsChecked] = useState(upData &&  upData.article.active==1 ? true :false); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
      setFormData((prevState) => ({
        ...prevState,
        article:{
            active: isChecked === true ? 0 :1
        }
      }));
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setActive(active=='activer' ? 'desactiver' :'activer')
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            article: {
                ...prevState.article,
                [name]: value
            }
        }));
    };
    const addUnitee = (newUnitee) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            uniteearticle: [...prevFormData.uniteearticle, newUnitee]
        }));
    };
    const getdetailleGroupeArticle= async (idgroupe) => {
        axios.get(config.lienCrudmetier+'groupe_articles/groupewidthunitee/'+idgroupe)
        .then(response => {
            const responseData = response.data;
            console.log(responseData );
            setDetailleListeGroupeArticle((prevState) => ({
                ...prevState,
                article:responseData.data.groupe_article,
                uniteearticle:responseData.data.uniteegroupearticle
              }));
            setListeuniteeArticle(responseData.data.uniteegroupearticle);
            setFormData(prevFormData => ({
                ...prevFormData,
                uniteearticle: responseData.data.uniteegroupearticle
              }));
        })
        .catch(error => {
            console.log(error);
        });
    };

    const removeUnitee = (newListe) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            uniteearticle: newListe
        }));
    };
    const optionsgroupe_article = listegroupe_article!==null ? listegroupe_article.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptiongroupe_article, setSelectedOptiongroupe_article] = useState(upData==null ? 'Groupe Article' : upData.article.nomgroupe_article);
    const handleChangegroupe_article = (option) => {
        selectedOptiongroupe_article,(option.label);
        ///get value 
        if(upData==null){
            getdetailleGroupeArticle(option.value);
        }
        const { name, value } =option;
            setFormData(prevState => ({
        ...prevState,
        article: {
            ...prevState.article,
            ['idgroupe']: value
        }
        }));
        console.log(formData);
    };
    const checkForDuplicates = () => {
        for(let i=0;i<formData.uniteearticle.length;i++){
            for(let a=0;a<formData.uniteearticle.length;a++){
                if(i!=a){
                    if(formData.uniteearticle[i].nomunitee==formData.uniteearticle[a].nomunitee){
                        setErrorDuplicationUnitee("Il ne devrait pas y avoir de duplication d'unitee");
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
            console.log(formData.uniteearticle)
                return ;            
        }
        {upData == null ? (
            axios.post(config.lienCrudmetier+'articles',formData)
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
            axios.put(config.lienCrudmetier+'articles/'+formData.article.id,formData)
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
    //fin fonction
    return(
        <>
        <div class="col-lg-12 grid-margin stretch-card tablecrud" style={{height:'82vh'}} >
                    <div class="card" style={styles.backgroundColorDroit}>
                        <div class="card-body" >

                        <div class="row">
                                <div class="col-11">
                                <h4 class="card-title titre" style={styles.titreViollete} >Ajout Nouvelle Article</h4>
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
                                    <label style={styles.titreGris}>Nom Article</label>
                                    <div id="the-basics">
                                        <input class="typeahead" type="text" placeholder={upData==null ? 'Nom groupe' : upData.article.nomarticle} onChange={handleChange} name='nom' style={styles.backgroundColorGauche}/>
                                    </div>
                                </div>
                                <div class="col">
                                    <label style={styles.titreGris}>Groupe Article </label>
                                    <Select 
                                        value={selectedOptiongroupe_article}
                                        onChange={handleChangegroupe_article}
                                        options={optionsgroupe_article}
                                        placeholder={selectedOptiongroupe_article}
                                    />
                                </div>
                            </div>
                            {detailleListeGroupeArticle!=null ?
                                <>
                                        <div class="form-group row">
                                            <div class="col">
                                                <label style={styles.titreGris}>TVA</label>
                                                <div id="the-basics">
                                                    <input  class="typeahead" type="text" value={detailleListeGroupeArticle.article.nomtva+' '+detailleListeGroupeArticle.article.value} readOnly />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label style={styles.titreGris}>Type de gestion</label>
                                                <div id="the-basics">
                                                    <input type="text" class="typeahead" value={detailleListeGroupeArticle.article.nomtypegestion} readOnly />
                                                </div>
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
                                            listeunitee={listeunitee} error={errorduplicateunitee} uniteemodification={upData==null ? detailleListeGroupeArticle.uniteearticle : upData.uniteearticle} 
                                            idarticle={upData==null ? null : upData.article.id }></Table>
                                         <div className="col-lg-12  paginationnew" >
                                            <div  className="btn-group">
                                                <button type="submit"  className="btn btn-inverse-primary btn-fw" >cree</button>
                                            </div>
                                        </div>
                                </>
                                :null
                            }
                        </form>
                        </div>
                    </div>
        </div>
        </>
    );
}
