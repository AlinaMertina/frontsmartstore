import React, { useEffect, useRef,useState }  from 'react';
import Header from './header/Header';
import Typenotification from './typenotification/Typenotification';
import RolesUtilisateur from './rolesutilisateur/RolesUtilisateur';
import Typedegestion from './typedegestion/Typedegestion';
export default function Roletvanotif({
    setMot,mot,setChoix,
    doRecherche ,name}){
    return(
        <>
            <div class="col-9 corps1">
                <Header 
                    setMot={setMot}
                    mot={mot}
                   
                    doRecherche={doRecherche}
                    setChoix={setChoix}
                > </Header>
                <div class="row  justify-content-center">
                    <div class="col-6"> 
                        <Typenotification></Typenotification>
                    </div>
                    <div class="col-1"> 
                        
                    </div>

                    <div class="col-5"> 
                        <RolesUtilisateur></RolesUtilisateur>
                        <Typedegestion></Typedegestion>
                    </div>
                   
                </div>
               
            </div>
        </>
    );
}