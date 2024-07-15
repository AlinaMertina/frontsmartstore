import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Table from './table/Table';
import axios from 'axios';
import config from '../../../../../config/config';
import { useAsyncError } from 'react-router-dom';

export default function RolesUtilisateur(){
    const[data,setData]=useState([]);
    const getData= async () => {
        axios.get(config.lienCrudmetier+'roles/nbruser')
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
            console.log(responseData.data);
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
                <div class="card"  style={styles.backgroundColorDroit}>
                    <div class="card-body">
                        <h4 class="mb-0" style={styles.titreViollete}>Roles utilisateur</h4>
                           <Table data={data}></Table> 
                    </div>
                </div>
            </div>
        </>
    );
    // card-title 
}
