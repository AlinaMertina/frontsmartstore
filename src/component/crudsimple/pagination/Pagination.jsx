import React,{useState} from 'react';
import config from '../../../config/config';
import axios from 'axios';

export default function Pagination({lien,setData,size,mot}){
  const [debut, setDebut] = useState(0);
    const suivant = async (e) => {
      e.preventDefault();
      const newDebut = debut + size;
      setDebut( newDebut);
      console.log(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)
      axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)
        .then(response => {
          const responseData = response.data;
          console.log(responseData.data);
          setData(responseData.data);
        })
        .catch(error => {
         console.log(error);
        });
     
    };
    
    const precedent = async (e) => {
      e.preventDefault();
      var newDebut = debut;
      if(debut>0){
        newDebut = debut - size;
        setDebut( newDebut);
      }
      console.log(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)

      axios.get(config.lienCrudmetier+lien+'/page/'+newDebut+'/'+size+'/'+mot)
        .then(response => {
          const responseData = response.data;
          setData(responseData.data);
        })
        .catch(error => {
          console.log(error);
        });
    
    };
    const cellStyle = {
      float: 'right'
    };
    
    return(
      <div className="col-lg-12  whitebackcolor " >
        <div style={cellStyle} className="btn-group">
            <button type="button" className="btn btn-inverse-info btn-fw" onClick={precedent} ><i className="mdi mdi-arrow-left"></i></button>
            <button type="button" className="btn btn-inverse-info btn-fw" onClick={suivant}><i className="mdi mdi-arrow-right"></i></button>
        </div>
      </div>
    );

}