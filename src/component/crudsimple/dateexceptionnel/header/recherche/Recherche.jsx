import React,{useState}  from 'react';
import config from '../../../../../config/config';
import axios from 'axios';

export default function Recherche({setData,debut,setDebut,fin,setFin,size}){
    const [formData, setFormData] = useState({
        debut: debut,
        fin:fin
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if(name==='debut'){
            setDebut(value);
        }else{
            setFin(value);
        }
    };
    const doSearch = async (e) => {
        
        e.preventDefault();
        console.log(config.lienCrudmetier+'date_exceptionnels/page/0/'+size+'/'+formData.debut+'/'+formData.fin);
        axios.get(config.lienCrudmetier+'date_exceptionnels/page/0/'+size+'/'+formData.debut+'/'+formData.fin)
            .then(response => {
                console.log(response.data.data);
                setData(response.data.data);
                console.log(response.data);
            })
            .catch(error => {
               console.log(error)
            });
    };
    const reinitialisation = async (e) => {
        e.preventDefault();
        setDebut('null');
        setFin('null');
        window.location.reload();
    };
   
    return(
        <>
        
        <form onSubmit={doSearch} className="navbar-nav navbar-nav-right">
                 <li className="nav-item dropdown">
                     <div className="col-sm-9">
                        <input type="date" className="form-control" id="exampleInputUsername2" placeholder={debut} onChange={handleChange} name='debut'/>
                     </div>
                 </li>
                 <li className="nav-item dropdown">
                    
                        <input type="date" className="form-control" id="exampleInputUsername2" placeholder={fin} onChange={handleChange} name='fin'/>
                     
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