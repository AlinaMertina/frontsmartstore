import React  from 'react';
import Tr from './tr/Tr';
export default function Table({data,listeunitee,listefamille,listetva,}){
    const cellStyle = {
      textAlign: 'center'
    };
      return(
          <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
          <div className="table-responsive">
              <table className="table table-bordered tablesimple">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Famille</th>
                    <th>Type tva</th>
                    <th>TVA</th>
                    <th style={cellStyle} >Modification</th>
                    <th style={cellStyle} >Liste Unitee</th>
                    <th style={cellStyle} >Liste Article</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((value,index)=>(
                      <Tr key={index} data={value} listefamille={listefamille} listetva={listetva} listeunitee={listeunitee}></Tr>
                  ))}
                </tbody>
              </table>
            </div>
      </div>
      );
}