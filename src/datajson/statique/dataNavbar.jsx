
const dataNavbar = {
    admin:{
    navhorizontale:[
      {
      lien:'#',
      nom:'Article'
    },
    {
      lien:'#',
      nom:'Finance'
    },
    {
      lien:'#',
      nom:'Recovrement'
    },
    {
      lien:'#',
      nom:'Recovrement'
    }
    
      ],
      navverticale:{
        Article:
          [
            {
              icone:'icon-grid',
              nom:'Client',
              lien:'#',
              dataliste:[
                          {lien:'/client_etat',
                          nom:'Categorie'},
                        ]
            },
            {
              icone:'ti-package',
              nom:'Article',
              lien:'#',
              dataliste:[
                          {lien:'/unitees',
                          nom:'Unitees'},
                          {lien:'/famille_articles',
                          nom:'Famille Article'},
                          {lien:'/tva',
                          nom:'TVA'},
                          {lien:'/groupe_articles',
                          nom:'Groupe Article'},
                          {lien:'/etatarticles',
                          nom:'Etat Article'},
                          {lien:'/articles',
                          nom:'Articles'},
                        ]
            },
            {
              icone:'icon-head',
              nom:'Compte Utilisateur',
              lien:'#',
              dataliste:[
                          {lien:'/utilisateurs',
                          nom:'Utilisateur'}
                        ]
            },
            {
              icone:'ti-settings',
              nom:'Parametre',
              lien:'/lecturesimple',
              dataliste:[
                          {lien:'/lecturesimple',
                          nom:''},
                          {lien:'/utilisateurs',
                          nom:'Utilisateur'}
                        ]
            }
          ]
      }
    }
  };
  
export default dataNavbar;

