import React,{useState}  from 'react';
import config from '../../../config/config';
import axios from 'axios';
export default function RechercheSimple({lien,setData,setMot,mot,size,reInitialisationVu}){
    const [motrecherche, setMotrecherche] = useState(mot);
    const doSearch = async (e) => {
        e.preventDefault();
        axios.get(config.lienCrudmetier+lien+'/page/0/'+size+'/'+mot)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
               console.log(error)
            });
    };
    const handleChange = (e) => {
        setMot(e.target.value);
        setMotrecherche(e.target.value);
    };

    const reinitialisation = async (e) => {
      e.preventDefault();
        setMot('null');
        setMotrecherche('null');
        window.location.reload();
        reInitialisationVu();
    };
    
    return(
       <>
       <form onSubmit={doSearch} className="navbar-nav navbar-nav-right">
           
                <li className="nav-item dropdown">
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder={motrecherche} onChange={handleChange}/>
                    </div>
                </li>
            <div>
                <button type="submit" className="btn btn-inverse-info btn-fw" ><i className="icon-search"></i> </button>
                &nbsp;&nbsp;
                <button type="button" className="btn btn-inverse-info btn-fw" onClick={reinitialisation} >    <i className="mdi mdi-autorenew"></i> </button>
            </div>
        </form>
       </>
    );
    
}
