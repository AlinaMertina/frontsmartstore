import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';

export default function Article(){
    //declaration variable
    const [listecolonne,setListecolonne]=useState([
        {th:'Nom',colonne:'nomarticle',choix:true},
        {th:'Unitee',colonne:'nomunitee',choix:true},
        {th:'Quantitee',colonne:'quantitee',choix:true},
        {th:'Groupe',colonne:'nomgroupe',choix:true},
        {th:'Famille',colonne:'nomfamille_article',choix:true},
        {th:'TVA',colonne:'nomtva',choix:1}
     ]);   
    const size=6;
    const [choixDroit, setChoixDroit] = useState(2);
    const [choixGauche, setChoixGauche] = useState(1);
    const [mot, setMot] = useState('null');
    const [data, setData] = useState([]);
    const [updata, setUpdata] = useState(null);
    const [debut, setDebut] = useState(0);
    const [listegroupe_article, setListeGroupe_article] = useState([]);
    const [listefamille, setListefamille] = useState([]);
    const [listetva, setTva] = useState([]);
    const [listeunitee, setListeunitee] = useState([]);

    const lien='articles';
    const [selectedFamille, setSelectedFamille] = useState({
        value:'null',
        label:'famille article'
    });
    const [selectedGroupe_article, setSelectedGroupe_article] = useState({
        value:'null',
        label:'groupe article'
    });
    const [selectedtTva, setSelectedTva] = useState({
        value:'null',
        label:'tva article'
    });
    //fin declaration variable
    //fonction
    const choixElementDroitPF= async () => {
        setChoixDroit(choixDroit==1 ?2 : 1);
    };
    const choixElementGauchePF= async () => {
        setChoixGauche(choixGauche==1 ?2 : 1);
    };
    const reload= async () => {
        window.location.reload();
    };
    const SubmitRechercheSimple= async (e) => {
        e.preventDefault();
        axios.get(config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/null/null/null')
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
               console.log(error)
            });
    };
    const SubmitRecherche= async (e) => {
        e.preventDefault();
        axios.get(config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/'+selectedGroupe_article.value+'/'+selectedFamille.value+'/'+selectedtTva.value)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
               console.log(error)
            });
    };
    const handlerRechercheSimple=  (e) => {
        const { name, value } = e.target;
        setMot(name);  
    };
    const choixElementDroit = (index) => {
        setChoixDroit(index);
    };
    const choixElementGauche = (index) => {
        setChoixGauche(index);
    };
    const modificationValue = (datav) => {
        setChoixGauche(3);
        console.log('valuee');
        setUpdata(datav);
    };
    const getData= async () => {
        var lienvalue = config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/'+selectedGroupe_article.value+'/'+selectedFamille.value+'/'+selectedtTva.value;
        console.log(lienvalue);
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
    const suivant = async (e) => {
        e.preventDefault();
        const newDebut = debut + size;
        setDebut( newDebut);
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot+'/'+selectedGroupe_article.value+'/'+selectedFamille.value+'/'+selectedtTva.value)
          .then(response => {
            const responseData = response.data;
            console.log(responseData.data);
            setData(responseData.data);
          })
          .catch(error => {
           console.log(error);
          });
    };
    const precedent = async (e) => {
        e.preventDefault();
        var newDebut = debut;
        if(debut>0){
          newDebut = debut - size;
          setDebut(newDebut);
        }
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot+'/'+selectedGroupe_article.value+'/'+selectedFamille.value+'/'+selectedtTva.value)
          .then(response => {
            const responseData = response.data;
            setData(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    const getListeFamille = async () => {
        axios.get(config.lienCrudmetier+'famille_articles/active')
          .then(response => {
            const responseData = response.data;
            setListefamille(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
      
    };
    const getListeTva = async () => {
        axios.get(config.lienCrudmetier+'tvas/active')
          .then(response => {
            const responseData = response.data;
            setTva(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    const getListeGroupe_article = async () => {
        axios.get(config.lienCrudmetier+'groupe_articles/active')
          .then(response => {
            const responseData = response.data;
            setListeGroupe_article(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    const getListeunitee = async () => {
        axios.get(config.lienCrudmetier+'unitees')
          .then(response => {
            const responseData = response.data;
            setListeunitee(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    useEffect( () => {
        getData();
        getListeFamille();
        getListeTva();
        getListeunitee();
        getListeGroupe_article();
    }, []);
    //fonction
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                    mot={mot}
                    handlerRechercheSimple={handlerRechercheSimple}
                    SubmitRechercheSimple={SubmitRechercheSimple}
                    choixElementDroit={choixElementDroit}
                         choixGauche={choixGauche}
                       data={data}
                       listecolonne={listecolonne}
                       precedent={precedent}
                       suivant={suivant}
                       choixElementGauchePF={choixElementGauchePF}
                       upData={updata}
                       listegroupe_article={listegroupe_article}
                       colonne={listecolonne}
                       setUpaData={modificationValue}
                       listeunitee={listeunitee}
                       setChoixGauche={choixElementGauche}
                    ></Gauche>
                  <Droit 
                  setChoix={setChoixDroit}
                    choix={choixDroit}
                   mot={mot} handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF} reload={reload}
                   listefamille={listefamille} selectedFamille={selectedFamille} setSelectedFamille={setSelectedFamille}
                   listegroupe_article={listegroupe_article} selectedGroupe_article={selectedGroupe_article} setSelectGroupe_article={setSelectedGroupe_article}
                   listetva={listetva} setSelectedTva={setSelectedTva} selectedTva={selectedtTva}
                   SubmitRecherche={SubmitRecherche} listecolonne={listecolonne} setListecolonne={setListecolonne}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );

}