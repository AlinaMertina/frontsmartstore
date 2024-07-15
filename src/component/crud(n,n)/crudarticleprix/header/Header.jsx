import React,{useRef,useState}  from 'react';
import config from '../../../../config/config';
import axios from 'axios';
import Select from 'react-select';
import StatiqueFonction from '../../../../statiquefonction/Fonction';
export default function Header({listearticleetat,listeclientetat,setChoix,setIdselect}){
    //variable function select
        //Etat Article
        const handleprixnormal = () => { 
            setIdselect("null");
            setChoix(1);
        };
        const handleprixdegros = () => {
            setIdselect("null");
            setChoix(2);
        };

        const optionsarticleetat = listearticleetat!==null ? listearticleetat.map(item => ({
            value: item.id,
            label: item.nom
        })) : null;
        const [selectedOptionarticleetat, setSelectedOptionarticleetat] = useState("article");
        const handleChangearticleetat = (option) => {
            setSelectedOptionarticleetat(option.label);
            setIdselect(option.value);
            setChoix(4);
        };
        //Etat Client
        const optionsclientetat = listeclientetat!==null ? listeclientetat.map(item => ({
            value: item.id,
            label: item.nom
        })) : null;
        const [selectedOptionclientetat, setSelectedOptionclientetat] = useState("client");
        const handleChangeclientetat = (option) => {
            setSelectedOptionclientetat(option.label);
            setIdselect(option.value);
            setChoix(3);
        };
    //fin variable function select
 
    return(
        <>
            <div className="navbar col-md-12 col-lg-12 col-12 p-0 d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <h3 className="text-capitalize styletexte" >{ StatiqueFonction.capitalizeFirstLetter(`Prix ${name}`)}</h3>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center ">
                    <div  className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <div className="col-sm-9">
                                <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={handleprixnormal}>
                                    Prix normale
                                </button>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="col-sm-9">
                                <button type="button" className="btn btn-inverse-primary btn-fw" onClick={handleprixdegros}>
                                    Prix de gros
                                </button>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Select 
                                value={selectedOptionclientetat}
                                onChange={handleChangeclientetat}
                                options={optionsclientetat}
                                placeholder={selectedOptionclientetat}
                            />
                        </li>
                        <li className="nav-item dropdown">
                            <Select 
                                value={selectedOptionarticleetat}
                                onChange={handleChangearticleetat}
                                options={optionsarticleetat}
                                placeholder={selectedOptionarticleetat}
                            />
                        </li>
                    </div>
                </div>
            </div>
        </>
    );

}