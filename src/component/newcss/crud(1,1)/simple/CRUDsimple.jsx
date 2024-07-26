import React, { useEffect, useRef,useState }  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';
export default function CRUDsimple({name,lien,formaData,colonne,detaille}){
    //declaration variable 
    const size=6;
    const [choix, setChoix] = useState(3);
    const [mot, setMot] = useState('null');
    const [data, setData] = useState([]);
    const [updata, setUpdata] = useState(null);
    const [debut, setDebut] = useState(0);

    //fin declaration
    //fonction
    const choixElementDroitPF= async () => {
        setChoix(choix==2 ?3 : 2);
    };
    const reload= async () => {
        // setChoix(choix==2 ?3 : 2);
        window.location.reload();
    };

    const handlerRechercheSimple=  (e) => {
        const { name, value } = e.target;
        setMot(name);  
    };
    const SubmitRechercheSimple =async (e) => {
      e.preventDefault();
      axios.get(config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot)
      .then(response => {
          setData(response.data.data);
      })
      .catch(error => {
         console.log(error)
      });
    };
    const choixElementDroit = (index) => {
        setChoix(index);
    };
    const modificationValue = (datav) => {
        setChoix(4);
        setUpdata(datav);
    };
    const getData= async () => {
        var lienvalue = config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot;
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
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)
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
        axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)
          .then(response => {
            const responseData = response.data;
            setData(responseData.data);
          })
          .catch(error => {
            console.log(error);
          });
      
    };
    //fonction
    useEffect( () => {
      getData();
  }, []);
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                       mot={mot}
                       handlerRechercheSimple={handlerRechercheSimple}
                       SubmitRechercheSimple={SubmitRechercheSimple}
                       choixElementDroit={choixElementDroit}
                       name={name}
                       modificationValue={modificationValue}
                       data={data}
                       suivant={suivant}
                       precedent={precedent}
                       colonne={colonne}
                       detaille={detaille}
                    ></Gauche>
                  <Droit 
                  choix={choix} setChoix={setChoix} lien={lien} choixElementDroitPF={choixElementDroitPF}
                  reload={reload} mot={mot} handlerRechercheSimple={handlerRechercheSimple} SubmitRechercheSimple={SubmitRechercheSimple}
                  updata={updata} setUpdata={setUpdata}
                  colonne={colonne}
                  formaData={formaData}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );
}
