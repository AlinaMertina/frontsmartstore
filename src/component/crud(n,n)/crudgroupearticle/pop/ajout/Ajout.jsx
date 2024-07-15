import React,{useEffect, useRef,useState}  from 'react';
import Select from 'react-select';
import Table from './table/Table';
import axios from 'axios';
import config from '../../../../../config/config';
export default function Ajout({listeunitee,listefamille,listetva,moi}){
    const [errorduplicateunitee, setErrorduplicateunitee] = useState('');
    const [formData, setFormData] = useState({
        groupe_article:{
            nom: '',
            idfamille_article:'',
            idtva:'',
        },
        uniteegroupearticle:[]
    });
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
   

    //select react liste tva
    const optionstva = listetva!==null ? listetva.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptiontva, setSelectedOptiontva] = useState(null);
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

    //fin select react 
        //select react liste tva
        const optionsfamille = listefamille!==null ? listefamille.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
        const [selectedOptionfamille, setSelectedOptionfamille] = useState('......');
        const handleChangefamille = (option) => {
            setSelectedOptionfamille(option.label)
            const { name, value } =option;
                setFormData(prevState => ({
            ...prevState,
            groupe_article: {
                ...prevState.groupe_article,
                ['idfamille_article']: value
            }
            }));
        };
    //fin select react 
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
    const close = () => {
        moi.current.style.display='none';
      };

    const submit = async (e) => {
        e.preventDefault();
        checkForDuplicates();
        console.log(formData);
        if(checkForDuplicates()==false){
                return ;            
        }
        console.log(formData);
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
        });
    };
    return(
        <>
            <div  ref={moi} className="main-panel addService">
                <div className="content-popup modifcontent-pop">
                  <span id="closePopup" className="close-popup close"><button onClick={close}><i className="fas fa-times"></i></button></span>
                  <div className="col-md-8 ">
                    <h3 className="card-title" style={{ fontFamily: 'ubuntu', color: '#3f3e91' }}>
                        Ajouter une nouvelle Groupe
                    </h3>
                    <form onSubmit={submit}  className="forms-sample">
                            <div class="form-group row">
                                <div class="col">
                                    <label>Nom Groupe</label>
                                    <div id="the-basics">
                                        <input class="typeahead" type="text" placeholder="Nom Groupe" onChange={handleChange} name='nom'/>
                                    </div>
                                </div>
                                <div class="col">
                                    <label>Famille Article</label>
                                    <div id="bloodhound">
                                    <Select
                                        value={selectedOptionfamille}
                                        onChange={handleChangefamille}
                                        options={optionsfamille}
                                        placeholder={selectedOptionfamille}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col">
                                    <label>TVA</label>
                                    <div id="the-basics">
                                    <Select
                                        value={selectedOptiontva}
                                        onChange={handleChangetva}
                                        options={optionstva}
                                        placeholder={selectedOptiontva}
                                    />
                                    </div>
                                </div>
                            </div>
                            <Table error={errorduplicateunitee} setvalueliste={addUnitee} listeunitee={listeunitee}></Table>
                        <button type="submit" className="btn btn-primary mr-2">cree</button>
                      </form>
                  </div>
                </div>
            </div>
        </>
    );
  }



