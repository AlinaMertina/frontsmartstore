import React,{useRef,useState,useEffect}  from 'react';
import ModificationUnitee from '../../../crudgroupearticle/pop/modification/ModificationUnitee';
import ModificationValue from '../../pop/modification/ModificationValue'
export default function Tr({data,colonne,listeunitee}){

    console.log("valie");
    console.log(data);
    //defaut value
    const lien ='articles/';
    const nomlisteDataexport ='uniteearticle';
    const structureRow ={
        idunitee:'',
        nomunitee:'',
        quantitee:'',
        vente:'oui',
        valide_vente:1,
        idarticle:data.v_article.id
    }
    const structureDataexport={
        uniteearticle:[]
    }
    //fin defaut value
    //style css 
    const cellStyle = {
        textAlign: 'center'
        };
    const rowStyle = {
        backgroundColor:  '#f0f0f0'  // Couleur de fond conditionnelle
    };
    //fin style css

    //ref pop
    const upunitee = useRef(null);
    const upuniteeblock = () => {
        upunitee.current.style.display='block';
    };
    const up = useRef(null);
    const upblock = () => {
      up.current.style.display='block';
    };
    //fin ref pop

    const [unitee,setUnitee]= useState(true);
    const [uniteequantitee,setUniteequantitee]= useState(true);
    const uniteepresente = () => {
        for (let i = 0; i < colonne.length; i++) {
          if (colonne[i]['colonne'] === 'nomunitee' && colonne[i]['choix'] !== true) {
            setUnitee(false);
          }
          if (colonne[i]['colonne'] === 'quantitee' && colonne[i]['choix'] !== true) {
            setUniteequantitee(false);
          }
        }
      };

    //useEffect
    useEffect(()=>{
        uniteepresente();
    },[colonne])


    return(
        <>
        {unitee === true  ? (
        data.v_article_unitee.map((item, index) => (
            <tr key={index}>
            {colonne.map((col, index) => (
                col.colonne === 'nomunitee' || col.colonne === 'quantitee' ?
                <td key={index}>{item[col.colonne]}</td>
                : <td key={index}>{data.v_article[col.colonne]}</td>
            ))}
            <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}>
                        <i className="mdi mdi-border-color"></i>
                    </button>
                    <ModificationValue moi={up} data={data.v_article}></ModificationValue>
            </td>

            <td style={cellStyle}>
                <button type="button" className="btn btn-inverse-info btn-fw" onClick={upuniteeblock}>
                        <i className="mdi mdi-format-list-bulleted"></i>
                </button>
                <ModificationUnitee data={data.v_article_unitee} listeunitee={listeunitee} moi={upunitee}
                nomgroupe={item['nomarticle']} lien={lien} nomlisteDataexport={nomlisteDataexport}
                structureRow={structureRow} structureDataexport={structureDataexport}  idgroupe={data.v_article.id}></ModificationUnitee>
            </td>

            </tr>
        ))
        ) :(
            <tr key={index}>
                {
                    colonne.map((col, index) => (
                        col.colonne !== 'nomunitee' && col.colonne !== 'quantitee' ?
                        <td key={index}>{data.v_article[col.colonne]}</td>
                        : null
                    ))
                }
                <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-info btn-fw" onClick={upuniteeblock}>
                        <i className="mdi mdi-format-list-bulleted"></i>
                    </button>
                    <ModificationUnitee data={data.v_article_unitee} listeunitee={listeunitee} moi={upunitee}
                    nomgroupe={item['nomarticle']} lien={lien} nomlisteDataexport={nomlisteDataexport}
                    structureRow={structureRow} structureDataexport={structureDataexport} idgroupe={data.v_article.id}></ModificationUnitee>
                </td>
            </tr>
        )}
        </>
    );
}