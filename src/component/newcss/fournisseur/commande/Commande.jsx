import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
export default function Commande(){
    //declaration variable
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const [listePArtfournisseur, setListePArtfournisseur] = useState([]);
    const [listecommande, setListecommande] = useState([]);
    const [indexlistecommande, setIndexListecommande] = useState(0);

    const [commande, setCommande] = useState({
        commande_frns:{
            idutililsateur:id,
            date: new Date().toISOString()
        },
        commande_frns_detaille:[]
    });

    const [listeArticle, setListeArticle] = useState([]);
    const [articleSelected, setArticleSelected] = useState({
        label:'',
        value:''  });
    const [priseCommande, setPriseCommande] = useState([]);
    const [modificationCommande, setModificationCommande] = useState([]);
    const [choixDroit, setChoixDroit] = useState(2);
    const [choixGauche, setChoixGauche] = useState(1);
    //fin declaration variable

    //fonction
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
    
    const getlistePrixParFrns= async (article) => {
        var lienvalue = config.lienCrudmetier+`fournisseur_articles/prixarticleparfrns/${article.value}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListePArtfournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const submitlistePrixParFrns= async (e) => {
      e.preventDefault();
        setChoixGauche(1)
        var lienvalue = config.lienCrudmetier+`fournisseur_articles/prixarticleparfrns/${articleSelected.value}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListePArtfournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const validationcommande= async () => {
      console.log('validation')
        var lienvalue = config.lienCrudmetier+`commande_frnss`;
        axios.post(lienvalue,commande)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setCommande(prevState => ({
              ...prevState,
              commande_frns_detaille: []
            }));
            //eto mande ami ny redirecte liste de commande
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    //fin fonction
    const choixElementGauchePF= async () => {
        if(choixGauche==2){
           setChoixDroit(2);
        }
        setChoixGauche(choixGauche==1 ? 2 : 1 );
    };
    const choixElementDroitPF= async () => {
        setChoixDroit(1);
    };
    const reload= async () => {
        window.location.reload();
     };
     const setIdselectArticle= async (article) => {
        console.log('liste article by fournisseur')
        setArticleSelected(article);
        getlistePrixParFrns(article);
     };
    const choixElementDroit= async (index) => {
    setChoixDroit(index);
    };

    const PriseCommande= async (e,data) => {
        e.preventDefault();
        setChoixDroit(3);
        setPriseCommande(data);
    };
    const enregistrementPrisedeCommande= async (index,data) => {
      setCommande(prevState => ({
        ...prevState,
        commande_frns_detaille: commande.commande_frns_detaille.length>0 ? StatiqueFonction.setCommande(commande.commande_frns_detaille,data): [data]
      }));
    };
    const suppressionCommandef= async (index) => {
      setCommande(prevState => ({
        ...prevState,
        commande_frns_detaille: StatiqueFonction.suppression(commande.commande_frns_detaille,index)
      }));;
    };
    useEffect( () => {
        getlisteArticle();
    }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                      choixGauche={choixGauche}
                      listeprixarticleFrns={listePArtfournisseur}
                      modificationValue={PriseCommande}
                      choixElementGauchePF={choixElementGauchePF}
                      listeCommande={commande.commande_frns_detaille}
                      modificationCommande={PriseCommande}
                      suppressionCommande={suppressionCommandef}
                      ValidationCommande={validationcommande}
                      choixElementDroit={choixElementDroit}
                    ></Gauche>
                  <Droit 
                    choixDroit={choixDroit}
                    setChoixDroit={setChoixDroit}
                    listeArticle={listeArticle}
                    submitRecherchePrixArticleFrns={submitlistePrixParFrns}
                    reload={reload}
                    articleSelected={articleSelected}
                    setArticleSelected={setIdselectArticle}
                    choixElementDroitPF={choixElementDroitPF}
                    index={indexlistecommande}
                    dataUpdata={priseCommande}
                    UpValue={enregistrementPrisedeCommande}
                    choixElementDroit={setChoixDroit}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );
}
