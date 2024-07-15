import React,{useState,useEffect}  from 'react';
import config from '../../../config/config';
import Header from './header/Header';
import Table from './table/Table';
import Pagination from './pagination/Pagination';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import StatiqueFonction from '../../../statiquefonction/Fonction';

export default function CRUDutilisateur(){
    const { id } = useParams();
    let valueidforeignkey= 'null';
    if(id!=null){
      valueidforeignkey=id;
    }
    const [idFoureignkey, setIdFoureignkey] = useState(valueidforeignkey);
    const lien='utilisateurs';
    const size=6;
    const name='Utilisateurs';
    const [data, setData] = useState(null);
    const [mot, setMot] = useState('null');
    
    const [valueforeignkey, setValueforeignkey] = useState(null);
    const [listeroles, setListeroles] = useState(null);

    const getlisteRole= async () => {
        axios.get(config.lienCrudmetier+'roles')
        .then(response => {
            const responseData = response.data;
            setListeroles(responseData.data);
            if(id!=null){
                setValueforeignkey(StatiqueFonction.getNom(listeroles,id))
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
    const reInitialisationVu = async (debut ,size) => {
        var lienvalue = config.lienCrudmetier+lien+'/page/'+debut+'/'+size+'/'+mot+'/'+idFoureignkey;
        console.log(lienvalue);
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setData(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      };

   
    useEffect( () => {
        console.log(data);
        getlisteRole();
        reInitialisationVu(0,size);
    }, []);
    return(
        <div className="row whitebackcolor">
            <Header lien={lien} setData={setData} setMot={setMot} mot={mot} idFoureignkey={idFoureignkey}  setIdFoureignkey={setIdFoureignkey} size={size} name={name} listeforeignkey={listeroles} setValueforeignkey={setValueforeignkey} valueforeignkey={valueforeignkey} nameforeignkey={'roles'}></Header>
            <Table data={data} dataselect={listeroles} lien={lien} name={name}></Table>
            <Pagination lien={lien} setData={setData}   size={size} mot={mot} valueforeignkey={idFoureignkey}></Pagination>
        </div>
    );

}

