import React  from 'react';
import Tr from './tr/Tr';
export default function Table({data,dataselect,lien,name}){
  const cellStyle = {
    textAlign: 'center'
  };
    return(
    <div className="col-lg-12 grid-margin stretch-card whitebackcolor">
        <div className="table-responsive">
            <table className="table table-bordered tablesimple">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Login</th>
                  <th>Password</th>
                  {/* <th style={cellStyle} >Modification</th> */}
                  <th style={cellStyle} >Suppression</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((value,index)=>(
                    <Tr  key={index} data={value} dataselect={dataselect} lien={lien} name={name}></Tr>
                    
                ))}
              </tbody>
            </table>
          </div>
    </div>
    );
}