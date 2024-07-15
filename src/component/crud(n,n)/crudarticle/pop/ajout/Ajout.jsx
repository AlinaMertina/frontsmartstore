import { UserAttentionType } from '@tauri-apps/api/window';
import React,{useEffect, useRef,useState}  from 'react';
    import Select from 'react-select';
import axios from 'axios';
import config from '../../../../../config/config';
import Table from './table/Table';
export default function Ajout({moi,listegroupe_article,listeunitee}){
    //variable 
        const [detailleListeGroupeArticle, setDetailleListeGroupeArticle] = useState(null);
        const [errorDuplicationUnitee, setErrorDuplicationUnitee] = useState('');
        const [listeuniteeArticle, setListeuniteeArticle] = useState(listeunitee);
        //formData
        const [formData, setFormData] = useState({
            article:{
                nom: '',
                idgroupe:''
            },
            uniteearticle:[]
        });
        //fin formData
    //fin variable
    //attribue function groupe_article
        const optionsgroupe_article = listegroupe_article!==null ? listegroupe_article.map(item => ({
            value: item.id,
            label: item.nom
        })) : null;
        const [selectedOptiongroupe_article, setSelectedOptiongroupe_article] = useState(null);
        const handleChangegroupe_article = (option) => {
            setSelectedOptiongroupe_article(option.label);
            getdetailleGroupeArticle(option.value);
            const { name, value } =option;
            setFormData(prevState => ({
                ...prevState,
                article: {
                    ...prevState.article,
                    idgroupe: value
                }
            }));
            console.log(formData);
        };
    //fin attribue function groupe_article
    //handler input
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
    //fin handler input
    //fin select react 
    const getdetailleGroupeArticle= async (idgroupe) => {
        axios.get(config.lienCrudmetier+'groupe_articles/groupewidthunitee/'+idgroupe)
        .then(response => {
            const responseData = response.data;
            setDetailleListeGroupeArticle(responseData.data);
            setListeuniteeArticle(responseData.data.v_groupe_article_unitee);
            setFormData(prevFormData => ({
                ...prevFormData,
                uniteearticle: responseData.data.v_groupe_article_unitee
              }));
        })
        .catch(error => {
            console.log(error);
        });
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
        if(checkForDuplicates()==false){
                return ;            
        }
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
        });
    };

    return(
       <div  ref={moi} className="main-panel addService">
            <div className="content-popup modifcontent-pop">
                <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                <div className="col-md-8 ">
                <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                    Ajouter une nouvelle Article
                </h3>
                <form  className="forms-sample" onSubmit={submit}>
                        <div class="form-group row">
                            <div class="col">
                                <label>Nom Article</label>
                                <div id="the-basics">
                                    <input class="typeahead" type="text" placeholder="Nom Groupe" onChange={handleChange} name='nom' required/>
                                </div>
                            </div>
                            <div class="col">
                                <label>Famille Article</label>
                                <div id="bloodhound">
                                <Select 
                                    value={selectedOptiongroupe_article}
                                    onChange={handleChangegroupe_article}
                                    options={optionsgroupe_article}
                                    placeholder={selectedOptiongroupe_article}
                                />
                                </div>
                            </div>
                        </div>
                        {detailleListeGroupeArticle!=null ?
                            <>
                                    <div class="form-group row">
                                        <div class="col">
                                            <label>TVA</label>
                                            <div id="the-basics">
                                                <input  class="typeahead" type="text" value={detailleListeGroupeArticle.v_groupe_article_all.nomtva+' '+detailleListeGroupeArticle.v_groupe_article_all.value} readOnly />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label>Famille</label>
                                            <div id="the-basics">
                                                <input type="text" class="typeahead" value={detailleListeGroupeArticle.v_groupe_article_all.nomfamille_article} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <Table listeunitee={listeunitee} listeuniteeArticle={formData.uniteearticle} setListeuniteeArticle={setFormData}  errorduplicateunitte={errorDuplicationUnitee}></Table>
                            </>
                            :null
                        }
                    <button type="submit" className="btn btn-primary mr-2">cree</button>
                    </form>
                </div>
            </div>
        </div>
    );
}