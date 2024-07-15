import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';

export default function GroupeArticle(){
    //declaration variable
    const size=6;
    const [choixDroit, setChoixDroit] = useState(2);
    const [choixGauche, setChoixGauche] = useState(1);
    const [mot, setMot] = useState('null');
    const [data, setData] = useState([]);
    const [updata, setUpdata] = useState(null);
    const [debut, setDebut] = useState(0);
    const [listefamille, setListefamille] = useState([]);
    const [listetva, setTva] = useState([]);
    const [listetygestion, setListetypegestion] = useState([]);
    const [listeunitee, setListeunitee] = useState([]);

    const lien='groupe_articles';
    const [valueFamille_articles, setvalueFamille_articles] = useState({
        value:'null',
        label:'famille article'
    });
    //varable

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
        axios.get(config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/'+valueFamille_articles.value)
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
        setUpdata(datav);
    };
    const getData= async () => {
        var lienvalue = config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot+'/'+valueFamille_articles.value;
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
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot+'/'+valueFamille_articles.value)
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
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot+'/'+valueFamille_articles.value)
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
    const getListeTypegestion = async () => {
        axios.get(config.lienCrudmetier+'typegestions')
          .then(response => {
            const responseData = response.data;
            setListetypegestion(responseData.data);
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
    //fonction
    useEffect( () => {
        getData();
        getListeFamille();
        getListeTva();
        getListeTypegestion();
        getListeunitee();
    }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                        choixGauche={choixGauche}
                        setChoixGauche={choixElementGauche}
                        mot={mot} handlerRechercheSimple={handlerRechercheSimple} SubmitRechercheSimple={SubmitRechercheSimple} choixElementDroit={choixElementDroit}
                        data={data} setUpaDataChoix={modificationValue} precedent={precedent} suivant={suivant}
                        listefamille={listefamille} listetva={listetva} listetypegestion={listetygestion} upData={updata}
                        listeunitee={listeunitee}
                        choixElementGauchePF={choixElementGauchePF}
                    ></Gauche>
                  <Droit 
                    choix={choixDroit} setChoix={setChoixDroit} mot={mot}
                    handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF}
                    reload={reload} listefamille={listefamille} famillearticleChoix={valueFamille_articles}
                    setIdfamillearticle={setvalueFamille_articles} SubmitRechercheSimple={SubmitRechercheSimple}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );

}