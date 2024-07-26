import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';

import Tr from './tr/Tr';
export default function Table({data}){

    return(
        <>
       
           <div class="preview-list overflow-auto" id="notification" aria-labelledby="notificationDropdown" style={{ overflowY: 'scroll', height: '90%',overflowX:'none' }}>
                    {data && data.map((value,index)=>(
                            <Tr key={index} data={value}></Tr>
                            ))
                        }
            </div>
        </>
    );

}