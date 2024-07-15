import React, { useRef }  from 'react';
import '../../../../../asset/css/css/styles.css';
export default function Navtable({listecolonne,setListecolonne}){
    const notificationDropdown = useRef(null);
    const notification = useRef(null);
    const dropdown = (e) => {
        e.preventDefault();
        const active = 'activenotif';
        const element = notification.current;
        if(element){
            const isActive = element.classList.contains(active);
            if (isActive) {
                element.classList.remove(active);
            } else {
                element.classList.add(active);
            }
        }
    };
    const handleToggleChoice = (index) => {
        setListecolonne(prevListecolonne =>
          prevListecolonne.map((item, i) =>
            i === index ? { ...item, choix: !item.choix } : item
          )
        );
    };
    return(
        <ul class="navtable">
            <li class="nav-item dropdown">
                {/* <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    
                </a> */}
                <button  ref={ notificationDropdown }type="button"  className="btn btn-inverse-primary btn-fw"  onClick={dropdown}>
                     <i className="mdi mdi-dots-horizontal" style={{ fontSize: '30px' }}></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" id="notification"  ref={notification} aria-labelledby="notificationDropdown">
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
            </li>
        </ul>
    );
}