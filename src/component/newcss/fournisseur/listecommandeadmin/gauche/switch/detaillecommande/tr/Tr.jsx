import React,{useRef,useState,useEffect}  from 'react';
import styles from '../../../../../../../../datajson/style/style';
import StatiqueFonction from '../../../../../../../../statiquefonction/Fonction';
export default function Tr({data,dataFixeDate,dataAnulation,setModificationValue}){

    let color ;
    const id = data.idetat !=null ? parseInt(data.idetat, 10) : 0
    switch (id) {
        case 1:
            color= styles.backgroundColorDroit
            break;
        case 2:
            color= styles.backgroundColorVerteblanc
            break;
        case 3:
            color= styles.backgroundColorGauche
            break;
        case 4:
            color= styles.backgroundColorVerte
            break;
        default:
            color= styles.backgroundColorDroit
            break;
    }

    let modification ;
    switch (id) {
        case 1:
            modification=  
            <td style={styles.titreGris}>
                        <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={(e) => { setModificationValue(e, data); }}> 
                            <i className="mdi mdi-pencil"></i> 
                        </button>
            </td>
            break;
        default:
            modification=  
            <td style={styles.titreGris}>
                <button type="button" className="btn btn-inverse-primary btn-fw"  > 
                    {StatiqueFonction.formatDate(data.datelivraison) }
                </button>
            </td>
            break;
    }

    useEffect(()=>{},[color]);
    return(
        <>
            <tr  style={color} >
                <td style={styles.titreGris} >{data.nomfournisseur}</td>
                <td style={styles.titreGris} >{data.nomarticle}</td>
                <td style={styles.titreGris} >{data.designation}</td>
                <td style={styles.titreGris} >{data.nomunitee}</td>
                <td style={styles.titreGris} >{StatiqueFonction.formatNumber(data.pu) }</td>
                <td style={styles.titreGris} >{ StatiqueFonction.formatNumber(data.qt)}</td>
                <td style={styles.titreGris} >{StatiqueFonction.formatNumber(data.ptt)}</td>
                {modification}
                <td style={styles.titreGris}>
                    <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={(e) => { dataAnulation(e, data); }}> 
                        <i className="mdi mdi mdi-delete"></i> 
                    </button>
                </td>
            </tr>
        </>
    );
}


