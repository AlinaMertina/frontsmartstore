import { formatDistanceToNow, parseISO } from 'date-fns';


export default class StatiqueFonction{
    static capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static getNom(data, id) {
      console.log([data,id]);
        if(data){
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              return data[i].nom; 
            }
          }
        }
        return null; 
      }
    static uplaodimagevalide(fileName) {
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
        const parts = fileName.split('.');
        if(parts.length >0){
          let extension = parts[parts.length - 1].toLowerCase();
         
          if(allowedExtensions.includes(extension)==true){
            return true;
          }
        }
       return false;
    }

    static extensionimage(fileName) {
      const parts = fileName.split('.');
      if(parts.length >0){
        let extension = parts[parts.length - 1].toLowerCase();
        return extension;
      }
      return false;
    }

    static formatDate(isoString){
      if(isoString!=null){
        return isoString.slice(0, 10);
      }
    };

    // Fonction pour convertir un fichier en Base64
    static fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };

    static getIcone = (name) => {
      const table = [
          { icone: <i className="mdi mdi-cash-register iconeaffichage"></i>, name: 'caisse' },
          { icone: <i className="mdi mdi-receipt iconeaffichage"></i>, name: 'facturation' },
          { icone: <i className="mdi mdi-warehouse iconeaffichage"></i>, name: 'entree de stock' },
          { icone: <i className="mdi mdi-lan-connect iconeaffichage"></i>, name: 'responsable transfert' },
          { icone: <i className="mdi mdi-truck-delivery iconeaffichage"></i>, name: 'livraison' },
          { icone: <i className="mdi mdi-tag iconeaffichage"></i>, name: 'responsable des prix' },
          { icone: <i className="mdi mdi mdi-account-star iconeaffichage"></i>, name: 'admin' },
          { icone: <i className="mdi mdi-format-list-bulleted-type iconeaffichage"></i>, name: 'fifo' },
          { icone: <i className="mdi mdi-format-list-bulleted-type iconeaffichage"></i>, name: 'lifo' },
          { icone: <i className="mdi mdi-currency-usd iconeaffichage"></i>, name: 'prix unitaire moyen' },
          { icone: <i className="mdi mdi-cart-plus iconeaffichage"></i>, name: 'nouvelle commande' },
          { icone: <i className="mdi mdi-truck-fast iconeaffichage"></i>, name: 'commande expediee' },
          { icone: <i className="mdi mdi-cancel iconeaffichage"></i>, name: 'commande annulée' },
          { icone: <i className="mdi mdi-alert-box iconeaffichage"></i>, name: 'niveau de stock bas' },
          { icone: <i className="mdi mdi-plus-box iconeaffichage"></i>, name: 'produit ajoute' },
          { icone: <i className="mdi mdi-minus-box iconeaffichage"></i>, name: 'produit supprime' },
          { icone: <i className="mdi mdi-pencil-box iconeaffichage"></i>, name: 'produit mis a jour' },
          { icone: <i className="mdi mdi-account-plus iconeaffichage"></i>, name: 'nouvel utilisateur' },
          { icone: <i className="mdi mdi-account-remove iconeaffichage"></i>, name: 'utilisateur supprime' },
          { icone: <i className="mdi mdi-alert-circle iconeaffichage"></i>, name: 'erreur système' },
          { icone: <i className="mdi mdi-update iconeaffichage"></i>, name: 'mise a jour disponible' },
          { icone: <i className="mdi mdi-check-circle iconeaffichage"></i>, name: 'connexion reussie' },
          { icone: <i className="mdi mdi-close-circle iconeaffichage"></i>, name: 'connexion echouee' },
      ];
      if(name!=null){
        const lowerCaseName = name.toLowerCase().trim();
        
        for (let i = 0; i < table.length; i++) {
            if (table[i].name === lowerCaseName) {
              // console.log(lowerCaseName);
                return table[i].icone;
            }
        }
      }
     
  
      // Retourne null ou une icône par défaut si aucun nom ne correspond
      return null;
  };

  static getSequence = (str) => {
    if(str!=null){
      const match = str.match(/\d+$/);
      return match ? match[0].replace(/^0+/, '') : null;
    }
  };
  
  static setCommande = (liste, value) => {
    const updatedList = Array.isArray(liste) ? [...liste] : [];
  
    for (let i = 0; i < updatedList.length; i++) {
      if (
        (updatedList[i].nomfournisseur == null ? '' : updatedList[i].nomfournisseur.toLowerCase()) +
        (updatedList[i].nomarticle == null ? '' : updatedList[i].nomarticle.toLowerCase()) +
        (updatedList[i].designation == null ? '' : updatedList[i].designation.toLowerCase()) +
        (updatedList[i].nomunitee == null ? '' : updatedList[i].nomunitee.toLowerCase()) ===
        (value.nomfournisseur == null ? '' : value.nomfournisseur.toLowerCase()) +
        (value.nomarticle == null ? '' : value.nomarticle.toLowerCase()) +
        (value.designation == null ? '' : value.designation.toLowerCase()) +
        (value.nomunitee == null ? '' : value.nomunitee.toLowerCase())
      ) {
        updatedList[i] = value;
        return updatedList;
      }
    }
    updatedList.push(value);
    return updatedList;
  };
  static suppression = (liste, index) => {
   return liste.filter((_, i) => i !== index);
  };
  
  static choixcolonne = (listecolonne) => {
      let newtable=[];
      for(let i=0;i<listecolonne;i++){
        if(i==index){
          if(listecolonne[i].active==1){
            newtable.push(listecolonne[i].nom);
          }
        }
      }
      return newtable;
   };

  static formatRelativeTime = (dateString) => {
    const now = new Date();
    const pastDate = new Date(dateString);
    console.log(pastDate);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
  
    if (diffInSeconds < secondsInMinute) {
      return `${diffInSeconds} s`;
    } else if (diffInSeconds < secondsInHour) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return `${minutes} min`;
    } else if (diffInSeconds < secondsInDay) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return `${hours} h`;
    } else {
      const days = Math.floor(diffInSeconds / secondsInDay);
      return `${days} j`;
    }
  };
  static formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  // static formatRelativeTime = (dateString) => {
  //   const pastDate = parseISO(dateString);
  //   return formatDistanceToNow(pastDate, { addSuffix: true });
  // };
}