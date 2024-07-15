import React,{useEffect,useState}  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Gauche from './gauche/Gauche';
import Droit from './droit/Droit';
export default function Paiement(){
    //declaration variable
    const [listefournisseurnonpayee, setListefournisseurnonpayee] = useState([]);
    const [listecommandeFournisseur, setListecommandeFournisseur] = useState([]);
    const [fournisseur, setFournisseur] = useState(null);
    const [listefournisseur, setListeFournisseur] = useState(null);
    const [idcommande, setIdcommande] = useState(null);
    const [ detailleCommande, setDetailleCommande] = useState([]);
    const [choixDroit, setChoixDroit] = useState(2);
    const [choixGauche, setChoixGauche] = useState(1);
    const [fournisseurSelected, setFournisseurSelected] = useState(null);
    const [datafinpayement, setDatafinpayement] = useState(null);
    const [reste, setReste] = useState(null);
    const [datalistepayement, setDatalistepayement] = useState([]);
    const [dataSaisiepayement, setDataSaisiepayement] = useState({
        idcommande_frns_datefinpayement:'',
        idutilisateur:'',
        montant:'',
        date:'',
    });
    //fin declaration variable
    //fonction
    const getdatalistepayement= async () => {
        var lienvalue = config.lienCrudmetier+`v_commande_frns_payements/histroriquepayement/${fournisseur.idfournisseur}/${idcommande}`;
        console.log(lienvalue)
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDatalistepayement(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };

    const submitrchfrns= async (e,idfournisseur) => {
      e.preventDefault();
        var lienvalue = config.lienCrudmetier+`v_fournisseurnonpayees/getfournisseur/${idfournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListefournisseurnonpayee(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const getfournisseurnonpayee= async () => {
        var lienvalue = config.lienCrudmetier+`v_fournisseurnonpayees`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListefournisseurnonpayee(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const getdetailleCommande= async (idcommande) => {
        var lienvalue = config.lienCrudmetier+`v_commande_frns_detailles/detaille/${idcommande}/${fournisseur.idfournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDetailleCommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const reloaddetailleCommande= async () => {
        var lienvalue = config.lienCrudmetier+`v_commande_frns_detailles/detaille/${idcommande}/${fournisseur.idfournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDetailleCommande(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const getFournisseur= async () => {
        var lienvalue = config.lienCrudmetier+`fournisseurs/active`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const detailleCommandeFrns= async (e,data) => {
      e.preventDefault();
      setFournisseur(data);
      getlisteCommandefournisseur(data);
      setChoixGauche(2);
      setChoixDroit(3);
    };
    
    const detailleCommandeIdcom= async (e,data) => {
      e.preventDefault();
      console.log(data)
      setIdcommande(data.idcommande_frs);
      getdetailleCommande(data.idcommande_frs);
      setChoixGauche(3);
      setChoixDroit(7);
      getdatefinpayement(data.idcommande_frs);
      setReste(data);
    };

    const fixechoixDroit= async (e,index) => {
      e.preventDefault();
      if(index==5){
        getdatalistepayement();
      }
      setChoixDroit(index);
    };
    //liste commande fournisseur
    const [dateBetween, setDateBetween] = useState({
        date1:'null',
        date2:'null'
    });
    const size=6;
    const [debut, setDebut] = useState(0);
    
    const submitrchDate= async () => {
        var lienvalue = config.lienCrudmetier+`v_reste_payee_with_zeros/page/0/${size}/${dateBetween.date1}/${dateBetween.date2}/${fournisseur.idfournisseur}`;
        console.log(lienvalue);
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommandeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };

    const getlisteCommandefournisseur= async (data) => {
        var lienvalue = config.lienCrudmetier+`v_reste_payee_with_zeros/page/0/${size}/${dateBetween.date1}/${dateBetween.date2}/${data.idfournisseur}`;
        console.log(lienvalue);
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommandeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const getdatefinpayement= async (idcommande1) => {
        var lienvalue = config.lienCrudmetier+`commande_frns_datefinpayements/finddatefin/${idcommande1}/${fournisseur.idfournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setDatafinpayement(responseData.data[0]);
            console.log(responseData.data[0]);
            setDataSaisiepayement({...dataSaisiepayement,idcommande_frns_datefinpayement:responseData.data[0].id});
            
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const suivant= async (e) => {
        e.preventDefault();
        const newDebut = debut + size;
        setDebut( newDebut);
        var lienvalue = config.lienCrudmetier+`v_reste_payee_with_zeros/page/${debut}/${size}/${dateBetween.date1}/${dateBetween.date2}/${fournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommandeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const precedent= async (e) => {
        e.preventDefault();
        var newDebut = debut;
        if(debut>0){
          newDebut = debut - size;
          setDebut(newDebut);
        }
        var lienvalue = config.lienCrudmetier+`v_reste_payee_with_zeros/page/${debut}/${size}/${dateBetween.date1}/${dateBetween.date2}/${fournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommandeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const reloadRechercheCommandeFrns= async () => {
        setDateBetween({...old ,
        date1:'null',date2:'null'});
        var lienvalue = config.lienCrudmetier+`v_reste_payee_with_zeros/page/0/${size}/null/null/${fournisseur}`;
        axios.get(lienvalue)
        .then(response => {
          const responseData = response.data;
          if(responseData.data!=null){
            setListecommandeFournisseur(responseData.data);
            console.log(responseData.data);
          }else{
            console.log(responseData.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    
    //fin liste commande fournisseur
   
    //fin fonction
    useEffect( () => {
       getfournisseurnonpayee();
       getFournisseur();
       console.log(listefournisseur)
       
    }, []);

    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    <Gauche 
                        listefournisseurnonpayee={listefournisseurnonpayee}
                        detailleCommandeFrns={detailleCommandeFrns}
                        listecommandeFournisseur={listecommandeFournisseur}
                        detailleCommandeIdcom={detailleCommandeIdcom}
                        detailleCommande={detailleCommande}
                        setChoixGauche={setChoixGauche}
                        choixGauche={choixGauche}
                        setChoixDroit={setChoixDroit}
                        suivant={suivant}
                        precedent={precedent}
                        reste={reste}
                    ></Gauche>
                  <Droit 
                        choixDroit={choixDroit}
                        setChoixDroit={fixechoixDroit}
                        listeFournisseur={listefournisseur}
                        submitrchfrns={submitrchfrns}
                        fournisseurSelected={fournisseurSelected}
                        setFournisseurSelected={setFournisseurSelected}
                        dateBetween={dateBetween}
                        setDateBetween={setDateBetween}
                        submitrchDate={submitrchDate}
                        datafinpayement={datafinpayement}
                        datalistepayement={datalistepayement}
                        dataSaisiepayement={dataSaisiepayement}
                        reloadRecherchedate={reloadRechercheCommandeFrns}
                  >
                  </Droit>
                </div>
            </div>
        </>
    );
}

