import React,{useState,useEffect,useRef} from 'react';
export default function Admin(){
    const utilisateurlink = useRef(null);
    const utilisateurli = useRef(null);
    const showUtilisateur = () => {
        if (utilisateurli.current) {
            const nomcss= 'show';
            const isActive =utilisateurli.current.classList.contains(nomcss);
            if (isActive) {
                utilisateurli.current.classList.remove(nomcss);
                utilisateurlink.current.setAttribute('aria-expanded', 'false');
            } else {
                utilisateurli.current.classList.add(nomcss);
                utilisateurlink.current.setAttribute('aria-expanded', 'true');
            }
          }
    };
    return(
        <div class="col-2 nav">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item lisidebarh" >
                <a class="nav-link" href="index.html">
                  <i class="icon-grid menu-icon"></i>
                  <span class="menu-title">Dashboard</span>
                </a>
              </li>
              <li class="nav-item lisidebarh" onClick={showUtilisateur}>
                <a ref={utilisateurlink} class="nav-link linavbarv" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="icon-layout menu-icon"></i>
                  <span class="menu-title">Utilisateur</span>
                </a>
                <div ref={utilisateurli} class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="/roles">Role</a></li>
                    <li class="nav-item"> <a class="nav-link" href="/utilisateurs">Compte</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
      </div>
    );
}