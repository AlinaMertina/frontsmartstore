import React,{useState}  from 'react';
import config from '../../../../../config/config';
import axios from 'axios';
import Select from 'react-select';
export default function Recherche({
    listegroupe_article,groupe_article,setGroupe_article,
    listefamille,famille,setFamille,
    listetva,tva,setTva,
    mot,setMot,
    setData
    }){
    //attribue fonction select 
    const optionsgroupe_article = listegroupe_article!==null ? listegroupe_article.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    const [selectedOptiongroupe_article, setSelectedOptiongroupe_article] = useState(groupe_article.label);
    const handleChangegroupe_article = (option) => {
        setSelectedOptiongroupe_article(option.label);
        setGroupe_article(option);
    };
    const optionsfamille = listefamille!==null ? listefamille.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    const [selectedOptionfamille, setSelectedOptionfamille] = useState(famille.label);
    const handleChangefamille = (option) => {
        setSelectedOptionfamille(option.label);
        setFamille(option);
    };
    const optionstva = listetva!==null ? listetva.map(item => ({
        value: item.id,
        label: item.nom
    })) : null;
    const [selectedOptiontva, setSelectedOptiontva] = useState(tva.label);
    const handleChangetva = (option) => {
        setSelectedOptiontva(option.label);
        setTva(option);
    };
    //fin attribue fonction select 
    //handler mot
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMot(value);
    };
    //fin handler mot
    const reinitialisation = async (e) => {
        e.preventDefault();
        setMot('null');
        setGroupe_article({
            value:'null',
            label:'groupe article'
        });
        setFamille({
            value:'null',
            label:'famille'
        });
        setTva({
            value:'null',
            label:'tva'
        });
        window.location.reload();
    };
    const doSearch = async (e) => {
        e.preventDefault();
        const lienv = config.lienCrudmetier+'articles/page/0/'+size+'/'+mot+'/'+groupe_article.value+'/'+famille.value+'/'+tva.value;
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
    return(
        <>
         <form onSubmit={doSearch} className="navbar-nav navbar-nav-right">
                 <li className="nav-item dropdown">
                     <div className="col-sm-9">
                         <input type="text" className="form-control" id="exampleInputUsername2" placeholder={mot} onChange={handleChange}/>
                     </div>
                 </li>
                <li className="nav-item dropdown ">
                    <Select 
                        value={selectedOptiongroupe_article}
                        onChange={handleChangegroupe_article}
                        options={optionsgroupe_article}
                        placeholder={selectedOptiongroupe_article}
                    />
                </li>
                <li className="nav-item dropdown ">
                    <Select 
                        value={selectedOptionfamille}
                        onChange={handleChangefamille}
                        options={optionsfamille}
                        placeholder={selectedOptionfamille}
                    />
                </li>
                <li className="nav-item dropdown ">
                    <Select 
                        value={selectedOptiontva}
                        onChange={handleChangetva}
                        options={optionstva}
                        placeholder={selectedOptiontva}
                    />
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