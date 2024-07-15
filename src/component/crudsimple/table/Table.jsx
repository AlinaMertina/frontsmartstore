import React  from 'react';
import Tr from './tr/Tr';
export default function Table({data,lien,name,detaillelink,nomdetaille}){
  const cellStyle = {
    textAlign: 'center'
  };
    return(
        <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
        <div className="table-responsive">
            <table className="table table-bordered tablesimple">
              <thead>
                <tr>
                  <th>Identifiant</th>
                  <th>Nom</th>
                  <th style={cellStyle} >Modification</th>
                  <th style={cellStyle} >Suppression</th>
                  {detaillelink!=null? <th style={cellStyle} >{nomdetaille}</th>:null}
                </tr>
              </thead>
              <tbody>
                {data && data.map((value,index)=>(
                    <Tr rang={index+1} key={index} data={value} lien={lien} name={name} detaillelink={detaillelink}></Tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
    );
}