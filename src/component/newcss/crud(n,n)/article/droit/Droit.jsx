import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Listedecolonne from './switch/Listedecolonne';
import Recherche from './switch/Recherche';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
export default function Droit({choix,setChoix,
    mot,handlerRechercheSimple,choixElementDroitPF,reload,
    listefamille,selectedFamille,setSelectedFamille,
    listegroupe_article,selectedGroupe_article,setSelectGroupe_article,
    listetva,selectedTva,setSelectedTva,
    SubmitRecherche,
    listecolonne,setListecolonne
}){
    let content;
    switch (choix) {
        case 1:
            content = <Notification choix1={choix} setChoix={setChoix} nb1={2} nb2={3}></Notification>;
            break;
        case 2:
            content = <Recherche 
                mot={mot} handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF} reload={reload}
                listefamille={listefamille} setSelectedFamille={setSelectedFamille} 
                selectedFamille={selectedFamille}  listegroupe_article={listegroupe_article} selectedGroupe_article={selectedGroupe_article}
                setSelectGroupe_article={setSelectGroupe_article}
                listetva={listetva} selectedTva={selectedTva} setSelectedTva={setSelectedTva}
                SubmitRecherche={SubmitRecherche}></Recherche>;
            break;
        case 3:
            content =<Listedecolonne listecolonne={listecolonne} setListecolonne={setListecolonne}></Listedecolonne> ;
            break;
        default:
            content = <Recherche 
                mot={mot} handlerRechercheSimple={handlerRechercheSimple} choixElementDroitPF={choixElementDroitPF} reload={reload}
                listefamille={listefamille} setSelectedFamille={setSelectedFamille} 
                selectedFamille={selectedFamille}  listegroupe_article={listegroupe_article} selectedGroupe_article={selectedGroupe_article}
                setSelectGroupe_article={setSelectGroupe_article}
                listetva={listetva} selectedTva={selectedTva} setSelectedTva={setSelectedTva}
                SubmitRecherche={SubmitRecherche}></Recherche>;
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