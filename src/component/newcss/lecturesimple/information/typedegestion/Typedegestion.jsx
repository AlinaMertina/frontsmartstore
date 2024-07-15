import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Table from './table/Table';
import { useAsyncError } from 'react-router-dom';
import axios from 'axios';
import config from '../../../../../config/config';

export default function Typedegestion(){
    const[data,setData]=useState([]);
    const getData= async () => {
        axios.get(config.lienCrudmetier+'typegestions')
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <div class="col-12 stretch-card grid-margin">
                <div class="card" style={styles.backgroundColorDroit}>
                    <div class="card-body">
                        <h4 class="mb-0" style={styles.titreViollete}>Type  gestion </h4>
                           <Table data={data}></Table> 
                    </div>
                </div>
            </div>
        </>
    );
}
