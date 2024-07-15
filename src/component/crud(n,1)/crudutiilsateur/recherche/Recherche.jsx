import React,{useState}  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import StatiqueFonction from '../../../../statiquefonction/Fonction';

export default function Recherche({lien,setData,setMot,mot,size,idFoureignkey,setIdFoureignkey,listeforeignkey}){
    const [motrecherche, setMotrecherche] = useState(mot);
    const [idFoureignkeyrecherche, setIdFoureignkeyrecherche] = useState(idFoureignkey);
    const doSearch = async (e) => {
        e.preventDefault();
        const lienv = config.lienCrudmetier+lien+'/page/0/'+size+'/'+motrecherche+'/'+idFoureignkeyrecherche;
        console.log(lienv);

        axios.get(lienv)
            .then(response => {
                const responseData = response.data;
                console.log(responseData.data);
                setData(responseData.data);
            })
            .catch(error => {
               console.log(error)
            });
    };
    const handleChange = (e) => {
        setMot(e.target.value);
        setMotrecherche(e.target.value)
    };
    const handleSelectChange = (event) => {
        const selectedOption = listeforeignkey.find(option => option.id === event.target.value);
        if (selectedOption) {
            console.log('valuee   e');
            setIdFoureignkey(selectedOption.id);
            setIdFoureignkeyrecherche(selectedOption.id);
        }
    };
    const reinitialisation = async (e) => {
      e.preventDefault();
        setMot('null');
        setIdFoureignkey('null');
        setMotrecherche('null');
        setIdFoureignkeyrecherche('null');
        window.location.reload();
    };
    
    return(
       <>
        <form onSubmit={doSearch} className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown">
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder={mot} onChange={handleChange}/>
                    </div>
                </li>
                
                <li className="nav-item dropdown ">
                    <select class="form-control" onChange={handleSelectChange} >
                    {listeforeignkey && listeforeignkey.length > 0 ? (
                        <option >
                            {StatiqueFonction.getNom(listeforeignkey,idFoureignkey)}
                        </option>
                        ) : null}           
                    {listeforeignkey && listeforeignkey.length > 0 ? (
                        listeforeignkey.map(option => (
                            <option value={option.id}> {option.nom} </option>
                        ))
                    ) : (
                        <option></option>
                    )}
                    </select>
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
