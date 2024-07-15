import React, { useRef }  from 'react';
import { Link } from 'react-router-dom';
import config from '../../../../../../../config/config';
import axios from 'axios';
import styles from '../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../statiquefonction/Fonction';
export default function Tr({data,setUpaDataChoix}){
   
    const Update = (e) => {
        e.preventDefault();
        setUpaDataChoix(data);
    };

    return(
        /// active ou pas atao identification par ligne
        <>
        {data  !=null ?(
            <tr style={data.groupe_article.active===1 ? styles.backgroundColorDroit :styles.backgroundColorGauche}>
                <td>{StatiqueFonction.getSequence(data.groupe_article.id) }</td>
                <td>{data.groupe_article.nomgroupe}</td>
                <td>{data.groupe_article.nomfamille_article}</td>
                <td>{data.groupe_article.value}%</td>
                <td>{data.groupe_article.nomtypegestion}</td>
                <td>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={Update}>
                        <i className="mdi mdi-border-color"></i>
                    </button>
                </td>
                <td>
                    <Link to={`/article/${data.id}`} className="btn btn-inverse-primary btn-fw">
                        <i className="mdi mdi-border-color"></i>
                    </Link>
                </td>
            </tr>
        ):null

        }
           
        </>
    );

}