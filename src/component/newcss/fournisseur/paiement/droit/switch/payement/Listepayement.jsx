import React ,{useEffect, useRef,useState} from 'react';
import styles from '../../../../../../../datajson/style/style';
import Li from './li/Li';
export default function Listepayement({data,setChoixDroit}){
   console.log('valuue1111');
   console.log(data);
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                        <div class="row">
                            <div class="col-10">
                                <p class="card-title ajout" style={styles.titreViollete}>Historique de paiement</p>
                            </div>
                            <div class="col-2">
                                <a   class="nav-link" onClick={(e)=>{setChoixDroit(e,7)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 stretch-card grid-margin">
                            <div class="card">
                                <div class="card-body" style={styles.overscroll}>
                                    <ul class="icon-data-list">
                                        {data && data.map((value,index)=>(
                                             <Li key={index} data1={value}></Li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
