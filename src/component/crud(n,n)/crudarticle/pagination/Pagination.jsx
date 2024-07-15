import React,{useState} from 'react';

export default function Pagination({
    mot,groupe_article,famille,tva,size,setData
    }){
    const [debut, setDebut] = useState(0);
    const suivant = async (e) => {
        e.preventDefault();
        const newDebut = debut + size;
        setDebut( newDebut);
        axios.get(config.lienCrudmetier+'articles/page/'+newDebut
        +'/'+size+'/'+mot+'/'+groupe_article.value+'/'+famille.value+'/'+tva.value)
        .then(response => {
            const responseData = response.data;
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
        axios.get(config.lienCrudmetier+'articles/page/'+newDebut
        +'/'+size+'/'+mot+'/'+groupe_article.value+'/'+famille.value+'/'+tva.value)
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