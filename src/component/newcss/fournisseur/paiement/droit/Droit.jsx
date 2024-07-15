import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
import Recherchefournisseur from './switch/listefournisseur/Recherche';
import Recherchecommande from './switch/commande/Recherche';
import Saisiepayement from './switch/payement/Saisiepayement';
import Listepayement from './switch/payement/Listepayement';
import Datefinpayement from './switch/payement/Datefinpayement';
import Summer from './switch/payement/Summer';
export default function Droit({choixDroit,setChoixDroit,
    listeFournisseur,
    submitrchfrns,fournisseurSelected,setFournisseurSelected,
    dateBetween,setDateBetween,submitrchDate,
    datafinpayement,
    datalistepayement,
    dataSaisiepayement,
    reloadRecherchedate
    }){
    let content;
    switch (choixDroit) {
        case 1:
            content = <Notification  setChoix={setChoixDroit}></Notification>;
            break;
        case 2:
            content = <Recherchefournisseur
                    listeFournisseur={listeFournisseur}
                    submit={submitrchfrns}
                    fournisseurSelected={fournisseurSelected}
                    setFournisseurSelected={setFournisseurSelected}
                    setChoixDroit={setChoixDroit}
                ></Recherchefournisseur>;
            break;
        case 3:
                content = <Recherchecommande
                    setChoixDroit={setChoixDroit}
                    dateBetween={dateBetween}
                    setDateBetween={setDateBetween}
                    submitrchDate={submitrchDate}
                    realod={reloadRecherchedate}
                ></Recherchecommande>;
                break;
        case 4:
            content = <Datefinpayement
                data1={datafinpayement}
                setChoixDroit={setChoixDroit}
                ></Datefinpayement>;
            break;
        case 5:
            content = <Listepayement
                data={datalistepayement}
                setChoixDroit={setChoixDroit}></Listepayement>;
            break;
        case 6:
            content = <Saisiepayement
                    data1={dataSaisiepayement}
                    setChoixDroit={setChoixDroit}
                ></Saisiepayement>;
            break;
        case 7:
            content = <Summer
                setChoixDroit={setChoixDroit}
            ></Summer>;
            break;
        default:
            content = <Notification  setChoix={setChoixDroit}></Notification>;
            break;
    }
    return(
        <>
            <div class="col-3 corps2">
                <Header></Header>
                <div class="row justify-content-between" > 
                    {content}
                </div>
            </div>
        </>
    );
}