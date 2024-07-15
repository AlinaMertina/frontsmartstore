import React,{useRef,useState,useEffect}  from 'react';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
import styles from '../../../../../../../../datajson/style/style';
export default function Tr({data,setUpaDataChoix,colonne}){
    const Update = (e) => {
        e.preventDefault();
        
        setUpaDataChoix(data);
    };
    const [unitee,setUnitee]= useState(true);
    const uniteepresente = () => {
        for (let i = 0; i < colonne.length; i++) {
          if (colonne[i]['colonne'] === 'nomunitee' && colonne[i]['choix'] !== true) {
            setUnitee(false);
          }
        }
      };
    useEffect(()=>{
        uniteepresente();
    },[])
    return(
        <>
            {unitee === true  ? (
                data.uniteearticle.map((item, index) => (
                    <tr key={index} style={data.article.active===1 ? styles.backgroundColorDroit :styles.backgroundColorGauche}>
                        {colonne.map((col, index) => (
                            col.colonne === 'nomunitee' || col.colonne === 'quantitee' ?
                            <td key={index}>{item[col.colonne]}</td>
                            : <td key={index}>{data.article[col.colonne]}</td>
                        ))}
                        <td >
                                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={Update}>
                                    <i className="mdi mdi-border-color"></i>
                                </button>
                        </td>
                        <td>
                                <button type="button" className="btn btn-inverse-primary btn-fw" >
                                    <i className="mdi mdi-tag"></i>
                                </button>
                        </td>
                    </tr>
                ))
            ) :(
                <tr >
                    {
                        colonne.map((col, index) => (
                            col.colonne !== 'nomunitee' && col.colonne !== 'quantitee' ?
                            <td key={index}>{data.article[col.colonne]}</td>
                            : null
                        ))
                    }
                    <td >
                            <button type="button" className="btn btn-inverse-primary btn-fw" onClick={Update}>
                                <i className="mdi mdi-border-color"></i>
                            </button>
                    </td>
                    <td>
                            <button type="button" className="btn btn-inverse-primary btn-fw" >
                                <i className="mdi mdi-tag"></i>
                            </button>
                    </td>
                </tr>
            )}
        </>
    );
}