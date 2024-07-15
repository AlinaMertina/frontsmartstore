import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../config/config';
import axios from 'axios';
import CorpsGauche from './corpsgauche/CorpsGauche';
import CorpsDroit from './corpsdroit/CorpsDroit';
export default function CRUDutilisateur({idrole}){
    // declaration variable
    // const { id } = idrole;
    let valueidforeignkey= 'null';
    // if(id!=null){
    //   valueidforeignkey=id;
    // }
    const [idFoureignkey, setIdFoureignkey] = useState(idrole==null ? null :idrole );
    const debut=0;
    const size=7;
    const lien='utilisateurs';
    const [data, setData] = useState([]);
    const [listeroles, setListeRoles] = useState([]);
    const [mot, setMot] = useState('null');
    const [valueforeignkey, setValueforeignkey] = useState(null);
    const [updatevalue, setUpdatevalue] = useState(null);
    const [choix, setChoix] = useState(0); //choix affichage de notification/ajout/recherche/modif
    // fin declaration variable
    //fonction initilisation
    const getlisteRole= async () => {
        axios.get(config.lienCrudmetier+'roles')
        .then(response => {
            const responseData = response.data;
            setListeRoles(responseData.data);
            if(id!=null){
                setValueforeignkey(StatiqueFonction.getNom(listeroles,id))
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getData= async () => {
        var lienvalue = config.lienCrudmetier+lien+'/page/'+debut+'/'+size+'/'+mot+'/'+idFoureignkey;
        
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
    //fin fonction initialisation
    useEffect( () => {
        getlisteRole();
        getData();
       
    }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <CorpsGauche 
                        setData={setData}
                        setChoix={setChoix}
                        setMot={setMot}
                        size={size}
                        mot={mot}
                        idFoureignkey={idFoureignkey}
                        lien={lien}
                        setvalumodif={setUpdatevalue}
                        data={data}
                        dataselect={listeroles}
                    ></CorpsGauche>
                    <CorpsDroit
                    choix={choix} valuemodif={updatevalue} lien={lien} 
                    listerole={listeroles} setMot={setMot} mot={mot} 
                    idrole={idFoureignkey} setIdRole={setIdFoureignkey} 
                    setChoix={setChoix} size={size} setData={setData}> </CorpsDroit>
                </div>
            </div>
        </>
    );
}