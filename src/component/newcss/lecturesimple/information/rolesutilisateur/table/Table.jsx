import React, { useEffect, useRef,useState }  from 'react';

import Tr from './tr/Tr';
export default function Table({data}){

    return(
        <>
            <div class="table-responsive">
                <table class="table table-borderless">
                    <tbody>
                        {data && data.map((value,index)=>(
                            <Tr key={index} data={value}>   </Tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

}