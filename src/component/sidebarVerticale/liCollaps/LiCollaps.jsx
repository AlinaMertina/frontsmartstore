
import React,{useRef} from 'react';
import ALiSidebarv from './alisidebarv/ALiSidebarv';
import UlCollapse from './ulcollapse/UlCollapse';


export default function  LiCollaps({icone,nom,lien,dataliste}){
    const moi = useRef(null);
    const moilink = useRef(null);

    const showCollapse = () => {
        if (moi.current) {
            const nomcss= 'show';
            const isActive =moi.current.classList.contains(nomcss);
            if (isActive) {
                moi.current.classList.remove(nomcss);
                moilink.current.setAttribute('aria-expanded', 'false');
            } else {
                moi.current.style.color='#6C7383';
                moi.current.classList.add(nomcss);
                moilink.current.setAttribute('aria-expanded', 'true');
            }
          }
    };
    return (
        <li class="nav-item lisidebarh" onClick={showCollapse}>
            <ALiSidebarv icone={icone} nom={nom} lien={lien} moi={moilink}></ALiSidebarv>
            {
                lien === '#' ? <UlCollapse dataliste={dataliste} moi={moi}></UlCollapse>:<></>
            }
        </li>
    );
}