import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../../../datajson/style/style';
export default function Li({data,setChoixlecture,pagelecture}){
    const moi=useRef(null);
   
    const click=()=>{
        setChoixlecture(data.id);
        // showCollapse();
        pagelecture(data.id)
        // window.location.reload();
     }
    
   
    return(
        <>
            <li ref={moi} onClick={click} style={styles.titreGris} class={data.active==true ? 'clickmenu':null }>
                    {data.nom}
            </li>
        </>
    );

}
