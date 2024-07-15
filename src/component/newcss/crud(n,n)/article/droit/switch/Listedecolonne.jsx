
import React, { useRef }  from 'react';
import styles from '../../../../../../datajson/style/style';
export default function Listedecolonne({choixElementDroitPF,listecolonne,setListecolonne}){
    const handleToggleChoice = (index) => {
        setListecolonne(prevListecolonne =>
          prevListecolonne.map((item, i) =>
            i === index ? { ...item, choix: !item.choix } : item
          )
        );
    };
    return(
        <>
            <div class="col-11  ml-3">
                <div class="card" style={styles.backgroundColorGauche}>
                    <div class="card-body" >
                    <div class="row">
                        <div class="col-10">
                            <p class="card-title ajout" style={styles.titreViollete}>Choix Colonne</p>
                        </div>

                        <div class="col-2">
                            <a   class="nav-link" onClick={choixElementDroitPF} style={styles.titreViollete}>
                                <i class="icon-grid menu-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
                        
                        {listecolonne && listecolonne.map((value, index) => (
                            <a className="dropdown-item preview-item" key={index}>
                                <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={value.choix}
                                    onChange={() => handleToggleChoice(index)}
                                    style={{ width: '20px', height: '20px' }}
                                />
                                {value.th}
                                </label>
                            </a>
                        ))}
                    </div> 
                    </div>
                </div>
                </div>
        </>
    );
}