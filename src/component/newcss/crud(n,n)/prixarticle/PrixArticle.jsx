import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';

export default function PrixArticle({id}){
    //declaration variable
    const [idarticle, setIdarticle] = useState(id);
    const [listeclientetat, setListeclientetat] = useState([]);
    const [data, setData] = useState([]);
    const [listearticleetat, setListearticleetat] = useState([]);
    const [choixPrix, setChoixPrix] = useState(1);
    const [choixDroit, setChoixDroit] = useState(2);
    const [mot, setMot] = useState('null');
    const [idselect, setIdselect] = useState({
        label:'',
        value:'null'
    });
    //fin declaration variable
    //fonction
    const getlisteclientetat= async () => {
        axios.get(config.lienCrudmetier+'client_etats/active')
        .then(response => {
            const responseData = response.data;
            setListeclientetat(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getlistearticleetat= async () => {
        axios.get(config.lienCrudmetier+'article_etats/active')
        .then(response => {
            const responseData = response.data;
            setListearticleetat(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getData= async () => {
        console.log(config.lienCrudmetier+`article_prixs/${choixPrix}/${idarticle}/${idselect.value}`);
        axios.get(config.lienCrudmetier+`article_prixs/${choixPrix}/${idarticle}/${idselect.value}`)
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    const choixElementDroit= async (value) => {
        setChoixDroit(value);
    };
    const neutre= async () => {
       
    };
    const setChoixPrixvalue= async (value) => {
        setChoixPrix(value);
        // getData();
    };
    const choixElementGauchePF= async () => {
        setChoixDroit(choixGauche==1 ?2 : 1);
    };
    
    useEffect( () => {
        getlistearticleetat(); 
        getlisteclientetat(); 
       getData();
    }, [choixPrix,idselect]);
    //fin fonction
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                    choixElementDroit={choixElementDroit}
                    mot={mot}
                    neutre={neutre}
                    data={data}
                    setData={setData}
                    choix={choixPrix}
                    idselect={idselect}
                    ></Gauche>
                  <Droit 
                    listeetatarticle={listearticleetat}
                    listeetatclient={listeclientetat}
                    setChoix={setChoixPrixvalue}
                    setSelectValue={setIdselect}
                    typeprix={idselect}
                    choixElementDroitPF={choixElementGauchePF}
                    choix={choixDroit}
                   
                  >
                  </Droit>
                </div>
            </div>
        </>
    );

}
