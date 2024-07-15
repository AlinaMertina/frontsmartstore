import React,{useRef,useState,useEffect}  from 'react';
import Tr from './tr/Tr';
import axios from 'axios';
import config from '../../../../config/config';
export default function Table({data,setData,choix,idselect}){
    const [valuetr,setValuetr] = useState(null);
    const updateValue = (index, newValue) => {
        const updatedValues = data.map((item, idx) =>
        idx === index ? newValue : item
        );
        setData(updatedValues);
       
    };
    const submit = async (e) => {
        e.preventDefault();
        //ataovy mi relode eto de avi eo ataovy manao redirecte eto 
        // console.log(data);
        axios.post(config.lienCrudmetier+`article_prixs/${choix}/${idselect}`,data)
        .then(response => {
            const responseData = response.data;
            console.log(responseData);
            if(responseData.data=='ok'){
                close();
                // window.location.reload();
            // reInitialisationVu(0,size);
            }else{
            // setError('Duplication de nom ou  probleme serveur ')
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
        });
    };
  
    return(
        <>
        <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
            <div className="table-responsive">
                <table className="table table-bordered tablesimple">
                <thead>
                   <tr>
                        <td>Unitee</td>
                        <td>Quantitee</td>
                        {choix && choix===2 ? (
                            <td>Quantitee article</td>
                            )
                        : null }
                        <td>Prix</td>
                        
                        <td>Nom utilisateur</td>
                   </tr>
                </thead>
                <tbody>
                        {data && data.map((value,index)=>(
                            <Tr key={index} data={value}  index={index} upData={updateValue} choix={choix} idselect={idselect}></Tr>
                        ))}
                    <button type="button"  onClick={submit} className="btn btn-primary mr-2">fixe</button>
                </tbody>
                </table>
            </div>
        </div>
        </>
    );
}