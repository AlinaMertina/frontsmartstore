import React,{useState,useEffect}  from 'react';
import config from '../../../config/config';
import Header from './header/Header';
import Pagination from '../../crud(n,1)/crudutiilsateur/pagination/Pagination';
import axios from 'axios';
import Table from './table/Table';

export default function CRUDgroupearticle({id}){
    const lien ='groupe_articles';
    let valueidforeignkey= 'null';
    if(id!=null){
      valueidforeignkey=id;
    }
    const [data, setData] = useState(null);
    const [listeunitee, setListeunitee] = useState([]);
    const [listefamille, setListefamille] = useState([]);
    const [listetva, setListetva] = useState([]);
    const [mot, setMot] = useState('null');
    const [idFoureignkey, setIdFoureignkey]  = useState(valueidforeignkey);
    const size=6;
    const [valueforeignkey, setValueforeignkey] = useState(null);
    const getlisteunitee= async () => {
        axios.get(config.lienCrudmetier+'unitees/active')
        .then(response => {
            const responseData = response.data;
            setListeunitee(responseData.data);
            console.log(responseData)
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getlistefamille= async () => {
        axios.get(config.lienCrudmetier+'famille_articles/active')
        .then(response => {
            const responseData = response.data;
            setListefamille(responseData.data);
            if(id!=null){
                setValueforeignkey(StatiqueFonction.getNom(listefamille,id))
            }
            console.log(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getListetva= async () => {
        axios.get(config.lienCrudmetier+'tvas/active')
        .then(response => {
            const responseData = response.data;
            setListetva(responseData.data);
           
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getData= async () => {
        axios.get(config.lienCrudmetier+lien+'/page/0'+'/'+size+'/'+mot+'/'+idFoureignkey)
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    useEffect( () => {
       getData();
       getlisteunitee();
       getlistefamille();
       getListetva();
    }, []);
    return(
        <div className="row whitebackcolor">
            <Header lien={lien} setData={setData} setMot={setMot} mot={mot} idFoureignkey={idFoureignkey}  setIdFoureignkey={setIdFoureignkey} size={size} 
            name={"Groupe Article"} listeforeignkey={listefamille} setValueforeignkey={setValueforeignkey} valueforeignkey={valueforeignkey} nameforeignkey={'Groupe Article'}
            listeunitee={listeunitee} listefamille={listefamille} listetva={listetva}></Header>
            <Table data={data} listefamille={listefamille} listeunitee={listeunitee} listetva={listetva}></Table>
            <Pagination lien={lien} setData={setData}   size={size} mot={mot} valueforeignkey={idFoureignkey}></Pagination>
        </div>
    );
}