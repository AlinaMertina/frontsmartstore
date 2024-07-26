import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import config from '../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SoketNotif(){
  const [liennotif,setliennotif] = useState(JSON.parse(localStorage.getItem('liennotif')) || {});
  
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { idrole } = user;
  useEffect(() => {
    const socket = new SockJS(config.lienport+'ws');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
        stompClient.subscribe("/admin/notifications", (message) => {         
        var responsData= JSON.parse(message.body);
       

        if(responsData.data!=null){
          console.log(responsData);
          console.log( responsData.data.idrole+"" + ""+idrole);
          if(responsData.data.idrole===idrole){
            toast( responsData.data.text, {
              autoClose: 10000, // Durée d'affichage en millisecondes
              pauseOnHover: true, // Pauser la durée d'affichage lorsque la souris survole
            });
          }
          
        } 
      });
    },(error) => {
      console.error('Connection error: ', error);
      setTimeout(connect, 5000); // Reconnexion après 5 secondes
    });
    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [liennotif]);
  return(
    <>
    <ToastContainer />
    </>
  );
}