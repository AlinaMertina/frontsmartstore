import React  from 'react';
import Header from '../../../crudutilisateur/corpsdroit/header/Header';
import Recherche from './switch/Recherche';
import Enregistrement from './switch/Enregistrement';
import Notification from '../../../crudutilisateur/corpsdroit/switch/Notification';
export default function Droit({choixDroit,setChoixDroit,
    listeArticle,
    submitRecherchePrixArticleFrns,reload,
    articleSelected,setArticleSelected,
    choixElementDroitPF,
    index,dataUpdata,
    UpValue }){
    let content;
    switch (choixDroit) {
        case 1:
            content = <Notification choix1={choixDroit} setChoix={setChoixDroit} nb1={1} nb2={2}></Notification>;
            break;
        case 2:
            content = <Recherche listeArticle={listeArticle} 
            submit={submitRecherchePrixArticleFrns} 
            articleSelected={articleSelected} setArticleSelected={setArticleSelected}
            reload={reload} 
            choixElementDroitPF={choixElementDroitPF}></Recherche>;
            break;
        case 3:
                content = <Enregistrement 
                index={index} data={dataUpdata}
                UpValue={UpValue} reload={reload}> </Enregistrement>;
                break;
        default:
            content = <Recherche listeArticle={listeArticle} 
            submit={submitRecherchePrixArticleFrns} 
            articleSelected={articleSelected} setArticleSelected={setArticleSelected}
            reload={reload} 
            choixElementDroitPF={choixElementDroitPF}></Recherche>;
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