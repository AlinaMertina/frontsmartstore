import React, { useRef,useState }  from 'react';
import styles from '../../../../../../datajson/style/style';
import Select from 'react-select';
export default function ChoixPrix({listeetatarticle,listeetatclient,setChoix,setSelectValue,typeprix,choixElementDroitPF}){

   
    const optionsetatarticle = listeetatarticle!=null ? listeetatarticle.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptionetatarticle, setSelectedOptionetatarticle] = useState('Etat article');
    const handleChangeetatarticle = (option) => {
        setSelectValue(option);
        // setSelectedOptionetatarticle(option.label);
        setSelectedOptionetatarticle(option);
        setChoix(4);
    };
    const optionsetatclient = listeetatclient!=null ? listeetatclient.map(item => ({
        value: item.id,
        label: item.nom
        })) : null;
    const [selectedOptionetatclient, setSelectedOptionetatclient] = useState('categorie client');
    const handleChangeetatclient = (option) => {
        setSelectValue(option);
        // setSelectedOptionetatclient(option.label);
        setSelectedOptionetatclient(option);
        setChoix(3);
    };
    console.log([optionsetatarticle,optionsetatclient])
    const prixNormale = () => {
        setChoix(1);
    };
    const prixDegros = () => {
        setChoix(2);
    };

    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Prix {typeprix.label}</p>
                        </div>
                        <div class="col-2">
                            <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Prix Normal</label>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-inverse-primary btn-fw" onClick={prixNormale} >
                                    <i className="mdi mdi-tag"></i>
                            </button>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputUsername1" style={styles.titreGris}>Prix de gros</label>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-inverse-primary btn-fw"  onClick={prixDegros}>
                                    <i className="mdi mdi-tag"></i>
                            </button>
                        </div>
                        <div class="form-group">
                            <label style={styles.titreGris}>Etat Article</label>
                            <Select
                                value={selectedOptionetatarticle}
                                onChange={handleChangeetatarticle}
                                options={optionsetatarticle}
                                placeholder={selectedOptionetatarticle}
                            />
                        </div>
                        <div class="form-group">
                            <label style={styles.titreGris}>Categorie Client</label>
                            <Select
                                value={selectedOptionetatclient}
                                onChange={handleChangeetatclient}
                                options={optionsetatclient}
                                placeholder={selectedOptionetatclient}
                            />
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
    

}