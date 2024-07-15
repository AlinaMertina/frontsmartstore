import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import ChoixPrix from './switch/ChoixPrix';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
export default function Droit({listeetatarticle,listeetatclient,setChoix,setSelectValue,typeprix,choixElementDroitPF,choix
}){

    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={2} nb2={3}></Notification>;
            break;
        case 2:
            content = <ChoixPrix listeetatarticle={listeetatarticle} listeetatclient={listeetatclient}
            setSelectValue={setSelectValue} typeprix={typeprix} choixElementDroitPF={choixElementDroitPF} setChoix={setChoix}></ChoixPrix>;
            break;
        default:
            content = <ChoixPrix listeetatarticle={listeetatarticle} listeetatclient={listeetatclient}
            setSelectValue={setSelectValue} typeprix={typeprix} choixElementDroitPF={choixElementDroitPF} setChoix={setChoix}></ChoixPrix>;
            break;
    }
    return(
        <>
            <div class="col-3 corps2">
                <Header setChoix={setChoix} ></Header>
                <div class="row justify-content-between" > 
                    {content}
                </div>
            </div>
        </>
    );

}