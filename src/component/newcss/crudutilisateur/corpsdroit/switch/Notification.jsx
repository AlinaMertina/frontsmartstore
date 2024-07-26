import React, { useEffect, useRef,useState }  from 'react';
import styles from '../../../../../datajson/style/style';
import axios from 'axios';
import config from '../../../../../config/config';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Commande from './typenotification/Commande';
export default function Notification({choix1,setChoix,nb1,nb2}){
  // localhost
  const liennotif = JSON.parse(localStorage.getItem('liennotif')) || {};
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { idrole } = user;
  //fin localhost
  //declaration variable
  const [listenotif, setListenotif] = useState([]);
  //fin declaration variable
  //fonction 
  const getNotification = async () => {
    axios.get(config.lienCrudmetier+`v_notification_users/${idrole}`)
    .then(response => {
      const responseData = response.data;
      if (responseData.data!=null) {
          console.log(responseData);
          setListenotif(responseData.data);
          // window.location.reload();
      } else {
          console.log(responseData.error);
        // console.log(responseData.data);
      }
    })
    .catch(error => {
        console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
      });
  // reInitialisationVu(debut,size);
  
};
useEffect(() => {
  getNotification();
}, []);
  //fin fonction
  

    //display none du dive
    return(
        <>
        
        <div class="col-11  ml-3" >
                    <div class="card" style={{ height:'80vh' }}>
                      <div class="card-body"   >
                        <div class="row">
                            <div class="col-10">
                                <p class="card-title ajout" style={styles.titreViollete}> Notification</p>
                            </div>

                            <div class="col-2">
                                <a   class="nav-link" onClick={()=>{setChoix(2)}} style={styles.titreViollete}>
                                    <i class="icon-grid menu-icon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="preview-list overflow-auto" id="notification" style={{ overflowY: 'scroll', height: '90%',overflowX:'none' }} >
                          {listenotif && listenotif.map((value,index)=>(
                              <Commande key={index} data={value}></Commande>
                              ))
                          }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}