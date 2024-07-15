import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import Table from './table/Table';

import axios from 'axios';
import config from '../../../../../config/config';

export default function Typenotification(){
    const[data,setData]=useState([]);
    const getData= async () => {
        axios.get(config.lienCrudmetier+'typenotifications')
        .then(response => {
            const responseData = response.data;
            setData(responseData.data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
            <div class="col-12  grid-margin stretch-card" style={{ height:'80vh' }}>
                <div class="card" style={styles.backgroundColorDroit}>
                    <div class="card-body  overflow-auto" style={{ overflow: 'auto' }}>
                        <h4 class="mb-0" style={styles.titreViollete}>Type de notification</h4>
                        <Table  data={data}></Table>  
                    </div>
                </div>
            </div>
       
        </>
    );
}

  
