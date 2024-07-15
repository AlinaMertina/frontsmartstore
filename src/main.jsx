// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import Accueil from './page/admin/Accueil';
import Login from './page/Login';
import ListeRole from './page/admin/utilisateur/ListeRole';
import ReactDOM from 'react-dom';
import logo from './datajson/statique/logo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CRUDSimple from './component/crudsimple/CRUDSimple';
// import CRUDutilisateur from './page/admin/utilisateur/CRUDutilisateur';
// import Unitees from './page/admin/article/crud/Unitees';
import Famille_article from './page/admin/article/newcrud/Famille_article'
// import Tva from './page/admin/article/crud/tva/Tva';
import Tva from './page/admin/article/newcrud/Tva';
// import CRUDgroupearticle from './component/crud(n,n)/crudgroupearticle/CRUDgroupearticle';
// import Groupe_article from './page/admin/article/crud/Groupe_article';
// import Ajout from './component/crud(n,n)/crudarticle/ajout/Ajout';
// import Table from './component/crud(n,n)/crudarticle/table/Table';
// import CRUDarticle from './component/crud(n,n)/crudarticle/CRUDarticle';
// import Article from './page/admin/article/crud/Article';
// import ArticleEtat from './page/admin/article/crud/ArticleEtat';
import ClientEtat from './page/admin/client/crud/ClientEtat';
// import Ajout from './component/crudsimple/dateexceptionnel/pop/Ajout';
// import DateExceptionnel from './page/admin/article/crud/DateExceptionnel';
// import CRUDarticleprix from './component/crud(n,n)/crudarticleprix/CRUDarticleprix';
import NewCRUDutilisateur from './page/admin/utilisateur/NewCRUDutilisateur';
import Unitees from './page/admin/article/newcrud/Unitees';
import GroupeArticle from './page/admin/article/newcrud/Groupe_article';
import Parametrage from './page/admin/utilisateur/Parametrage';
import Article from './page/admin/article/newcrud/Article';
import PrixArticle from './page/admin/article/newcrud/PrixArticle';
import EtatArticle from './page/admin/article/newcrud/EtatArticle';
import Fournisseur from './page/admin/fournisseur/crud/Fournisseur';
import PrixArticlefrns from './page/admin/fournisseur/crud/PrixArticle';
import Commande from './page/admin/fournisseur/crud/Commande';
import Listecommande from './page/admin/fournisseur/commande/Listecommande';
import Paiement from './page/admin/fournisseur/paiement/Paiement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Routes>
    
    <Route path="/" element={<Login></Login>} />


    {/* accuiel */}
    <Route path="/accuieladmin" element={<Accueil/>} />

    {/* fournisseur */}
    <Route path="/fournisseurs" element={<Fournisseur></Fournisseur>} />
    <Route path="/commande" element={<Commande></Commande>} />
    <Route path="/prixarticlefrns/:id" element={<PrixArticlefrns></PrixArticlefrns>} />
    <Route path="/listecommande" element={<Listecommande></Listecommande>} />
    <Route path="/paiement" element={<Paiement></Paiement>} />

    {/* client */}
    <Route path="/client_etat" element={<ClientEtat></ClientEtat>} />
    


      {/* article */}
      <Route path="/unitees" element={<Unitees></Unitees>} />
      <Route path="/tva" element={<Tva></Tva>} />
      <Route path="/groupe_articles" element={<GroupeArticle></GroupeArticle>} />
      {/* <Route path="/groupe_articles/:id" element={<Groupe_article></Groupe_article>} /> */}
      <Route path="/famille_articles" element={<Famille_article></Famille_article>} />
      <Route path="/etatarticles" element={<EtatArticle></EtatArticle>} />
      <Route path="/articles" element={<Article></Article>} />
      <Route path="/articleprix/:id" element={<PrixArticle/>} />



      
      {/* parametrage */}
      <Route path="/lecturesimple" element={<Parametrage/>} />

      {/* utilisateur */}
      <Route path="/utilisateurs/:id" element={<NewCRUDutilisateur/>} />
      <Route path="/utilisateurs" element={<NewCRUDutilisateur/>} />


    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

