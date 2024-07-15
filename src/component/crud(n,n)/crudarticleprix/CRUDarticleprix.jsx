import React,{useState,useEffect}  from 'react';
import config from '../../../config/config';
import Header from './header/Header';
import axios from 'axios';
import Table from './table/Table';
export default function CRUDarticleprix(){
    //declaration variable
    const [idarticle, setIdarticle] = useState('ART0000000005');
    const [listeclientetat, setListeclientetat] = useState([]);
    const [data, setData] = useState([]);
    const [listearticleetat, setListearticleetat] = useState([]);
    const [prixnormal, setPrixnormal] = useState([]);
    const [choix, setChoix] = useState(1);
    const [idselect, setIdselect] = useState("null");
    //fin declaration variable

    //initialisation variable
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
        axios.get(config.lienCrudmetier+`article_prixs/${choix}/${idarticle}/${idselect}`)
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    //inf initialisation variable
    useEffect( () => {
        console.log("valueeeeeeee initialisation");
       getlistearticleetat(); //valeur amn page CRUDarticleprix
       getlisteclientetat(); // valeur amn page CRUDarticleprix
       getData();
       console.log(idselect);
     }, [choix,idselect]);
    return(
        <div className="row whitebackcolor">
            <Header 
            listearticleetat={listearticleetat} listeclientetat={listeclientetat}
            setChoix={setChoix} setIdselect={setIdselect}></Header>
            <Table data={data}  setData={setData} choix={choix} idselect={idselect}></Table>
        </div>
    );

}