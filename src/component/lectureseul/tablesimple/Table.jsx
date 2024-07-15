import React,{useState,useEffect}  from 'react';
import Tr from './tr/Tr';
import axios from 'axios';
import config from '../../../config/config';
export default function Table({lien,name}){
    const [data, setData] = useState(null);
    const cellStyle = {
     textAlign: 'center'
    };
    const getData = async () => {
        axios.get(config.lienCrudmetier+lien)
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          setData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
      };
      useEffect(() => {
        getData();
      }, []);
    return(
        <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
        <div className="table-responsive">
            <table className="table table-bordered tablesimple">
              <thead>
                <tr>
                  <th>Identifiant</th>
                  <th>Nom</th>
                  <th style={cellStyle} >Modification</th>
                  <th style={cellStyle} >Liste utilisateur</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((value,index)=>(
                    <Tr  key={index} data={value} lien={lien} name={name}></Tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
    );
}