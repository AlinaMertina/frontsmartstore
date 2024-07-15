import React,{useRef,useState,useEffect}  from 'react';
export default function Tr({data,index ,upData,choix,idselect}){
   
    let datavalue=data;
    const [datavaluec, setValue] = useState(data);
   
    
    const updateValue = (e) => {
        e.persist();
        const { name, value } = e.target;
        datavalue[name]=value;
        datavalue['idarticle_etat']=choix===4 ? idselect : null; 
        datavalue['idclient_etat']=choix===3 ? idselect : null; 
        datavalue['idutililsateur']='UTL0000000008';
        setValue(prevState => ({
            ...prevState,
            [name]: value,
            ['idutililsateur']: 'UTL0000000008'
        }));
    };
    const cellStyle = {
        textAlign: 'center'
    };
    useEffect( () => {
        upData(index,datavalue);
      }, [datavaluec]);
    return(
        <tr>
            <td>{data.nomunitee}</td>
            <td>{data.quantitee}</td>
            {choix && choix===2 ? (
                <td style={cellStyle}>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder={datavalue.qt_prix_de_gros && datavalue.qt_prix_de_gros} onChange={updateValue} name='qt_prix_de_gros' />
                    </div>
                </td>
            )
             : null }
                <td style={cellStyle}>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="exampleInputUsername2" placeholder={datavalue.pttc && datavalue.pttc} onChange={updateValue} name='pttc' />
                        </div>
                </td>
            <td>
                {data.nomutilisateur}
            </td>
        </tr>
    );

}
// onChange={handleChange}
