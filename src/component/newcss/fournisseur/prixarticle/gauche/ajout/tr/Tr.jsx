import React,{useRef,useState,useEffect}  from 'react';
import styles from '../../../../../../../datajson/style/style';

export default function Tr({data,modificationValue,index}){
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = user;
    const [datavaluec, setValue] = useState(data);
    const updateValue = (e) => {
        // e.persist();
        const { name, value } = e.target;
        data.pu=value;
        data.idutilisateur=id;
        data.date= new Date().toISOString();
        setValue(prevState => ({
            ...prevState,
            pu: value,
            idutilisateur: id,
            date: new Date(),
        }));
    };
    useEffect( () => {
        modificationValue(index,data)
      }, [datavaluec]);
    return(
        <>
            <tr style={styles.backgroundColorDroit}>
                <td>{data.designation}</td>
                <td>{data.nomunitee}</td>
                <td>
                    <input style={styles.backgroundColorGauche} type="text" className="form-control" id="exampleInputUsername2" placeholder={data.pu ==null  ? null: data.pu} onChange={updateValue} name='pu' />
                    
                </td>
            </tr>
        </>
    );

}
