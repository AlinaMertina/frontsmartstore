import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';
import { event } from '@tauri-apps/api';
// import { event } from '@tauri-apps/api';

export default function PrixArticle({idfournisseur}){
    //declaration variable
    const [data, setData] = useState([]);
    const [idfournisseur1, setIdfournisseur] = useState(idfournisseur);
    const [updata, setupData] = useState(null);
    const [listefournisseur, setListefournisseur] = useState([]);
    const [listeupdata, setListeupData] = useState([]);
    const [listeArticle, setListeArticle] = useState([]);
    const [infoFournisseur, setInfoFournisseur] = useState([]);
    const [choixDroit, setChoixDroit] = useState(4);
    const [choixGauche, setChoixGauche] = useState(1);
    const [idArticle, setIdArticle] = useState({
        label:'',
        value:''
    });
    
    //fin declaration variable
    //foction
    const getListefournisseur= async () => {
      var lienvalue = config.lienCrudmetier+`fournisseurs`;
      console.log(lienvalue);
      axios.get(lienvalue)
      .then(response => {
        const responseData = response.data;
        if(responseData.data!=null){
          setListefournisseur(responseData.data);
          console.log(responseData.data);
        }else{
          console.log(responseData.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const submitFournisseur=async (e) => {
    e.preventDefault();
    getData();
  };
    const getData= async () => {
      var lienvalue = config.lienCrudmetier+`fournisseur_articles/ajout/null/${idfournisseur1}`;
      console.log(lienvalue);
      axios.get(lienvalue)
      .then(response => {
        const responseData = response.data;
        if(responseData.data!=null){
          setData(responseData.data[0]);
          setInfoFournisseur(responseData.data[1]);
          console.log(responseData.data);
        }else{
          console.log(responseData.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
    };
    const getlisteArticle= async () => {
        var lienvalue = config.lienCrudmetier+`articles/active`;
       
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListeArticle(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const getModification= async (article) => {
        var lienvalue = config.lienCrudmetier+`fournisseur_articles/ajout/${article.value}/${idfournisseur1}`;
        console.log('valuation')
        console.log(article)
        console.log(lienvalue)

        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListeupData(responseData.data[0]);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    
    const setChoixGaucheData= async (index) => {
        if(index==1){
          setChoixGauche(1);
          getData();
        }
     };
     const setIdselectArticle= async (article) => {
        setIdArticle(article);
        getModification(article);
        setChoixGauche(2);
     };

    const choixDroitPF= async () => {
        setChoixDroit(choixDroit==2 ? 4:2 );
     };
     const choixElementGauchePF= async () => {
        if(choixGauche==2){
            getData();
        }else{
            setChoixDroit(2);
        }
        setChoixGauche(choixGauche==1 ? 2 : 1 );
     };
     
     const reload= async () => {
        window.location.reload();
     };

    const choixElementDroit= async (index) => {
        setChoixDroit(index);
     };

    const modificationPrixinividuelle= async (data) => {
        setChoixDroit(3);
        setupData(data);
    };
    //fin fonction
    useEffect( () => {
        getData();
        getlisteArticle();
        getListefournisseur();
    }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                       listeprixFournisseur={data}
                       modificationPrixinividuelle={modificationPrixinividuelle}
                       choixElementGauchePF={choixElementGauchePF}
                       data={data}
                       updata={listeupdata}
                       setUpdata={setListeupData}
                       choixGauche={choixGauche}
                       choixElementDroit={choixElementDroit}
                      //  nomfournisseur={` ${infoFournisseur==null?  null:infoFournisseur.code}  ${infoFournisseur==null?  null:infoFournisseur.nom}`}
                       nomfournisseur={` ${infoFournisseur==null?  null:infoFournisseur.code} `}
                       getData={getData}
                       setChoixGauche={setChoixGaucheData}
                    ></Gauche>
                    <Droit 
                      choix={choixDroit}
                      listeArticle={listeArticle}
                      setIdArticle={setIdselectArticle}
                      choixDroitPF={choixDroitPF}
                      setChoixDRoit={setChoixDroit}
                      updata={updata}
                      fModificationValuePrix={modificationPrixinividuelle}
                      reload={reload}
                      listfournisseur={listefournisseur}
                      setIdFournisseur={setIdfournisseur}
                      submit={submitFournisseur}
                      setChoixGaucheData={setChoixGaucheData}
                    >
                    </Droit>
                </div>
            </div>
        </>
    );
    
}