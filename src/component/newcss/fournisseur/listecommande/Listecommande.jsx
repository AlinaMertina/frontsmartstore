import React, { useEffect,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';
import { event } from '@tauri-apps/api';
export default function Listecommande({idboncommande}){
   
    //declaration variable
    const size=6;
    const [listecommande, setListecommande] = useState([]);
    const [detaillecommande, setDetaillecommande] = useState([]);
    const [upData,setUpData]=useState(null);
    const [choixDroit, setChoixDroit] = useState(2);
    const [choixGauche, setChoixGauche] = useState(idboncommande!="null" ? 2 : 1);
    const [dateBetween, setDateBetween] = useState({
        date1:'null',
        date2:'null',
    });
    const [debut, setDebut] = useState(0);
    const [idcommandedetaille, setIdcommandedetaille] = useState(idboncommande!="null" ?  idboncommande: null);
   
    //fin declaration variable
    //fonction
    
    const setFixeDate= async (e,data) => {
      e.preventDefault();
      setUpData(data);
      setChoixDroit(3);
    };
    const setAnulation= async (e,data) => {
      e.preventDefault();
      setUpData(data);
      setChoixDroit(4);
    };
    const choixElementGauchePF= async () => {
        setChoixGauche(1);
    };
    
    const reload =async () => {
        window.location.reload();
    };
    const reloadvoirDetaillef= async () => {
        var lienvalue = config.lienCrudmetier+`v_commande_frns_detailles/detaille/${idcommandedetaille}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDetaillecommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        }); 
    };
    const voirDetaille= async (e,idcommande) => {
        e.preventDefault();
        setChoixGauche(2);
        setIdcommandedetaille(idcommande);
        var lienvalue = config.lienCrudmetier+`v_commande_frns_detailles/detaille/${idcommande}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDetaillecommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };


    const getDetaille= async (idcommande) => {
      setChoixGauche(2);
      setIdcommandedetaille(idcommande);
      var lienvalue = config.lienCrudmetier+`v_commande_frns_detailles/detaille/${idcommande}`;
      axios.get(lienvalue)
      .then(response => {
        const responseData = response.data;
        if(responseData.data!=null){
          setDetaillecommande(responseData.data);
          console.log(responseData.data);
        }else{
          console.log(responseData.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

    const getlisteCommande= async () => {
        var lienvalue = config.lienCrudmetier+`v_nbr_commmandes/recherche/${debut}/${size}/null/null`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const submirecherche= async (e) => {
      e.preventDefault();
        var lienvalue = config.lienCrudmetier+`v_nbr_commmandes/recherche/${debut}/${size}/${dateBetween.date1}/${dateBetween.date2}`;
        console.log(lienvalue);
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommande(responseData.data);
            console.log(responseData);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const suivant= async (e) => {
        e.preventDefault();
        const newDebut = debut + size;
        setDebut( newDebut);
        var lienvalue = config.lienCrudmetier+`v_nbr_commmandes/recherche/${debut}/${size}/${dateBetween.date1}/${dateBetween.date2}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const precedent= async (e) => {
        e.preventDefault();
        var newDebut = debut;
        if(debut>0){
          newDebut = debut - size;
          setDebut(newDebut);
        }
        var lienvalue = config.lienCrudmetier+`v_nbr_commmandes/recherche/${debut}/${size}/${dateBetween.date1}/${dateBetween.date2}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommande(responseData.data);
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
    useEffect( () => {
        getlisteCommande();
        // voirDetaille(event,idboncommande);
        if(idboncommande!="null"){
          getDetaille(idboncommande);
        }
        console.log("valueueue");
    }, [idboncommande]);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                    choixGauche={choixGauche}
                    dataListecommande={listecommande}
                    suivant={suivant}
                    precedent={precedent}
                    voirDetaille={voirDetaille}
                    dataDetailleCommande={detaillecommande}
                    setFixeDate={setFixeDate}
                    setAnulation={setAnulation}
                    choixElementGauchePF={choixElementGauchePF}
                    numboncommande={idcommandedetaille}
                    choixElementDroit={setChoixDroit}
                    ></Gauche>
                  <Droit 
                    choixDroit={choixDroit}
                    choixElementDroit={setChoixDroit}
                    dateBetween={dateBetween}
                    setDateBetween={setDateBetween}
                    reload={reload}
                    upData={upData}
                    reloadeDetaille={reloadvoirDetaillef}
                    submitRecherche={submirecherche}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );


}


