import React  from 'react';
import Tr from './tr/Tr';

export default function Table({data}){
  const cellStyle = {
    textAlign: 'center'
  };
    return(
      <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
        <div className="table-responsive">
            <table className="table table-bordered tablesimple">
              <thead>
                <tr>
                  <th>Debut</th>
                  <th>fin</th>
                  <th style={cellStyle} >Modification</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((value,index)=>(
                    <Tr key={index} data={value}></Tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
    );
}