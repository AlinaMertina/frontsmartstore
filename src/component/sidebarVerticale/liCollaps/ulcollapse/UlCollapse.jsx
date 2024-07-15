
import React,{useRef} from 'react';

import styles from '../../../../datajson/style/style';
export default function  UlCollapse({dataliste,moi}){
    return (
        <div class="collapse" id="ui-basic" ref={moi} style={styles.stylemenu}>
            <ul class="nav flex-column sub-menu" style={styles.stylemenu}>
                {dataliste && dataliste.map((data,index)=>(
                            <li class="nav-item" key={index} style={styles.titreGris}> <a class="nav-link" style={styles.titreGris} href={data.lien}>{data.nom}</a></li>
                        ))
                }
            </ul>
        </div>
    );

}