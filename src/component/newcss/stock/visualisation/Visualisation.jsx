import React,{useEffect,useState}  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from '../../fournisseur/paiement/droit/Droit';
import { event } from '@tauri-apps/api';
export default function Visualisation(){
    // declaration variable
    const [choixGauche, setChoixGauche] = useState(1);
    const [choixDroit, setChoixDroit] = useState(2);
    const [data, setData] = useState([]);
    const [listemagasinprint, setListeMagasinprint] = useState([]);
    const [listemagasin, setlistemagasin] = useState([]);
    const [dataRecherche, setDataRecherche] = useState({
        debut:'null',
        fin:'null',
        nom:'null',
        designation:'null',
        active:1
    });
    const [dataRechercheReload, setDataRechercheReload] = useState({
        debut:'null',
        fin:'null',
        nom:'null',
        designation:'null',
        active:1
    });
    const size=6;
    const [debut, setDebut] = useState(0);


    //fin declaration variable
    //fonction
    const getData= async (e,body) => {
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`stock/visualisation/0/${size}`;
        console.log(lienvalue)
        axios.get(lienvalue,body)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setData(responseData.data);
            setDebut(0);
            console.log(responseData.data);
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
        var lienvalue = config.lienCrudmetier+`stock/visualisation/${debut}/${size}`;
        axios.get(lienvalue,dataRecherche)
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
    const precedent= async (e) => {
        e.preventDefault();
        var newDebut = debut;
        if(debut>0){
          newDebut = debut - size;
          setDebut(newDebut);
        }
        var lienvalue = config.lienCrudmetier+`stock/visualisation/${debut}/${size}`;
        axios.get(lienvalue,dataRecherche)
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
    const choixElementGauche= async (e,index) => {
        e.preventDefault();
       if(index==1){
            setChoixDroit(2);
       }else{
            setChoixDroit(3);
       }
       setChoixGauche(index);
    };
    const getListemagasin= async () => {
        e.preventDefault();
        var lienvalue = config.lienCrudmetier+`depot`;
        axios.get(lienvalue,dataRecherche)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setlistemagasin(responseData.data);
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
        getData(event,dataRecherche);
        getListemagasin();
     }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                       choixGauche={choixGauche}
                       data={data}
                       suivant={suivant}
                       precedent={precedent}
                       choixElementGauche={choixElementGauche}
                       choixElementDroit={setChoixDroit}
                       listemagasinprint={listemagasinprint}
                    ></Gauche>
                  <Droit 
                    choixDroit={choixDroit}
                    setChoixDroit={setChoixDroit}
                    dataRecherche={dataRecherche}
                    setDataRecherche={setDataRecherche}
                    realodRecherche={(e)=>{getData(e,dataRechercheReload)}}
                    doRecherche={(e)=>{getData(e,dataRecherche)}}
                    suivant={suivant}
                    precedent={precedent}
                    listecolonne={listemagasin}
                    setColonneaffiche={setListeMagasinprint}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );
}