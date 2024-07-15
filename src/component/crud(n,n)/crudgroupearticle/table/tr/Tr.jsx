import React, { useRef }  from 'react';
import ModificationUnitee from '../../pop/modification/ModificationUnitee';
import Modificationvalue from '../../pop/modification/Modificationvalue';

export default function Tr({data,listeunitee,listefamille,listetva}){
    console.log("value tr");
    console.log(data);
   
    
    const upunitee = useRef(null);
    const upuniteeblock = () => {
        upunitee.current.style.display='block';
    };
    
    const remove = useRef(null);
    const removeblock = () => {
        remove.current.style.display='block';
    };
    //style css 
    const cellStyle = {
        textAlign: 'center'
      };
    const rowStyle = {
        backgroundColor:  '#f0f0f0'  // Couleur de fond conditionnelle
    };
    //fin style css
    const structureDataexport={
        uniteegroupearticle:[]
    }
    const structureRow ={
        idunitee:'',
        nomunitee:'',
        quantitee:'',
        vente:'oui',
        valide_vente:1,
        idgroupe:data.v_groupe_article_all.id
    }
    const nomlisteDataexport ='uniteegroupearticle';
    const lien='groupe_articles/';

    return(
        /// active ou pas atao identification par ligne
        <>
        <tr style={data.v_groupe_article_all.active===1 ? null :rowStyle}>
                <td>{data.v_groupe_article_all.nomgroupe}</td>
                <td>{data.v_groupe_article_all.nomfamille_article}</td>
                <td>{data.v_groupe_article_all.nomtva}</td>
                <td>{data.v_groupe_article_all.value}%</td>
                <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-primary btn-fw" onClick={upblock}>
                        <i className="mdi mdi-border-color"></i>
                    </button>
                    <Modificationvalue  moi={up} data={data.v_groupe_article_all} listefamille={listefamille} listetva={listetva}></Modificationvalue>
                </td>
                <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-info btn-fw" onClick={upuniteeblock}>
                        <i className="mdi mdi-format-list-bulleted"></i>
                    </button>
                    <ModificationUnitee data={data.v_groupe_article_unitee} 
                    listeunitee={listeunitee} moi={upunitee} 
                    idgroupe={data.v_groupe_article_all.id} lien={lien} nomlisteDataexport={nomlisteDataexport}
                    structureRow={structureRow} structureDataexport={structureDataexport}></ModificationUnitee>
                </td>
                <td style={cellStyle}>
                    <button type="button" className="btn btn-inverse-info btn-fw" onClick={upblock}> 
                        <i className="mdi mdi-format-list-bulleted"></i>
                    </button>
                    
                </td>
        </tr>
        </>
    );

}
