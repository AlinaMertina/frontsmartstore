import React,{useEffect, useRef,useState}  from 'react';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../../../config/config';
export default function ModificationValue({moi,data}){
    //declaration variable
    

    //fin declaration variable
    const [formData, setFormData] = useState(data);
    const [active, setActive] = useState(data.active== 1 ?'activer':'desactiver');
    const [detailleListeGroupeArticle, setDetailleListeGroupeArticle] = useState(data);
    const [listegroupe_article, setListegroupe_article] = useState([]);
    const getlistegroupe_article= async () => {
        axios.get(config.lienCrudmetier+'groupe_articles/active')
        .then(response => {
            const responseData = response.data;
            setListegroupe_article(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getdetailleGroupeArticle= async (idgroupe) => {
        axios.get(config.lienCrudmetier+'groupe_articles/groupewidthunitee/'+idgroupe)
        .then(response => {
            const responseData = response.data;
            console.log(responseData);
            setDetailleListeGroupeArticle(responseData.data.v_groupe_article_all);
        })
        .catch(error => {
            console.log(error);
        });
    };
    const [isChecked, setIsChecked] = useState(data.active==1 ? true :false); // État pour gérer si la case est cochée ou non
    const handleCheckboxChange = () => {
      setFormData((prevState) => ({
        ...prevState,
        active: isChecked === true ? 0 :1
      }));
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setActive(active=='activer' ? 'desactiver' :'activer')
    };
    const submit = async (e) => {
        e.preventDefault();
        console.log(formData);
        axios.put(config.lienCrudmetier+'articles',formData)
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          if(responseData.data=='ok'){
            close();
            window.location.reload();
          }else{
            // setError('Duplication de nom ou  probleme serveur ')
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des eidfamille_articlerreurs de réseau ou autres erreurs inattendues
        });
    };
    
    
    //handler input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
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
            idgroupe: value
        }));
        console.log(formData);
    };

    //fin handler input
    useEffect(()=>{
        getlistegroupe_article();
    },[])
    return(
        <div  ref={moi} className="main-panel addService">
             <div className="content-popup modifcontent-pop">
                 <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                 <div className="col-md-8 ">
                 <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                     Modification une nouvelle Article
                 </h3>
                 <form  className="forms-sample" onSubmit={submit}>
                         <div class="form-group row">
                             <div class="col">
                                 <label>Nom Article</label>
                                 <div id="the-basics">
                                     <input class="typeahead" type="text"  onChange={handleChange} name='nom' placeholder={data.nomarticle}/>
                                 </div>
                             </div>
                             <div class="col">
                                 <label>Groupe Article</label>
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
                                                 <input  class="typeahead" type="text" value={detailleListeGroupeArticle.nomtva+' '+detailleListeGroupeArticle.value} readOnly />
                                             </div>
                                         </div>
                                         <div class="col">
                                             <label>Famille</label>
                                             <div id="the-basics">
                                                 <input type="text" class="typeahead" value={detailleListeGroupeArticle.nomfamille_article} readOnly />
                                             </div>
                                         </div>
                                     </div>
                             </>
                             :null
                            }
                        <div class="form-group row">
                            <div class="col">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" checked={isChecked} onChange={handleCheckboxChange}/>
                              {active}
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">Modification</button>
                     </form>
                 </div>
             </div>
         </div>
     );
}