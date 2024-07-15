
import React,{useRef} from 'react';
import styles from '../../../../datajson/style/style';

export default function  ALiSidebarv({icone,nom,lien,moi}){
    return (
        <a className="nav-link linavbarv"  href={lien} aria-expanded="false" ref={moi} style={styles.backgroundColorDroit}>
          <i className={`${icone} menu-icon`}  style={styles.titreGris}></i>
          <span className="menu-title" style={styles.titreGris}>{nom} &nbsp;&nbsp;</span>
          {/* {lien === '#' ? <i className="menu-arrow"></i> : null} */}
        </a>
      );
      
}