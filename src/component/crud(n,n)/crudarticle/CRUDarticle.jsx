import React,{useState,useEffect}  from 'react';
import Header from './header/Header';
import Pagination from './pagination/Pagination';
import Table from './table/Table';
import axios from 'axios';
import config from '../../../config/config';
export default function CRUDarticle(){
    //variable
        //select value 
        const [listegroupe_article, setListegroupe_article] = useState([]);
        const [listefamille, setListefamille] = useState([]);
        const [listetva, setListetva] = useState([]);
        const [listeunitee, setListeunitee] = useState([]);

        //fin select value 
        //pagination recherche value
        const size=5;
        const [data, setData] = useState([]);
        const [mot, setMot] = useState('null');
        const [groupe_article, setGroupe_article] = useState({
            value:'null',
            label:'groupe article'
        });
        const [famille, setFamille] = useState({
            value:'null',
            label:'famille'
        });
        const [tva, setTva] = useState({
            value:'null',
            label:'tva'
        });
        //fin pagination recherche value
    //fin variable
    //initionalisation value select
    const getListegroupe_article= async () => {
        axios.get(config.lienCrudmetier+'groupe_articles/active')
        .then(response => {
            const responseData = response.data;
            setListegroupe_article(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getListeunitee= async () => {
        axios.get(config.lienCrudmetier+'unitees/active')
        .then(response => {
            const responseData = response.data;
            setListeunitee(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    const getListefamille= async () => {
        axios.get(config.lienCrudmetier+'famille_articles/active')
        .then(response => {
            const responseData = response.data;
            setListefamille(responseData.data);
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
        axios.get(config.lienCrudmetier+'articles/page/0/5/null/null/null/null')
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    //fin initionalisation value select 
    useEffect(()=>{ 
        getData();
        getListefamille();
        getListetva();
        getListeunitee();
        getListegroupe_article();
       
    },[])
    return(
        <div className="row whitebackcolor">
            <Header
                listegroupe_article={listegroupe_article} groupe_article={groupe_article} setGroupe_article={setGroupe_article}
                listefamille={listefamille} famille={famille}  setFamille={setFamille}  
                listetva={listetva} tva={tva} setTva={setTva} 
                mot={mot} setMot={setMot}
                size={size} 
                listeunitee={listeunitee}>
            </Header>
            <Table data={data} listeunitee={listeunitee}></Table>
            <Pagination
                mot={mot} groupe_article={groupe_article} 
                famille={famille} tva={tva}>
            </Pagination>
        </div>
    );
}