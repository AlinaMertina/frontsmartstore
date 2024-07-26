
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import config from '../config/config';
import '../asset/css/css/vertical-layout-light/login.css';
import logo from '../asset/image/384b36bd149e162eecf22fb27dbb5bc6.jpg'
import { useNavigate } from 'react-router-dom';
import styles from '../datajson/style/style';

export default function Login(){
    const [formData, setFormData] = useState({
        login: '',
        password:''
    });
    const [erroruplaod, setErroruplaod] = useState({
      color:'red',
      value:''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const submit = async (e) => {
        e.preventDefault();
        const lien=config.lienCrudmetier+'utilisateurs/connexion/'+formData.login+'/'+formData.password;
        axios.post(lien)
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          if(responseData.data!=null){
            localStorage.setItem('user', JSON.stringify(responseData.data));
            //atao par apport a le idrole
            if(responseData.data.idrole!=null &&  responseData.data.idrole=='ROL0001'){
                navigate('/accuieladmin');
                localStorage.setItem('liennotif',  JSON.stringify('/admin/notifications') );
            }
            else if(responseData.data.idrole!=null &&  responseData.data.idrole=='ROL0008'){
                localStorage.setItem('liennotif',  JSON.stringify('/appr/notifications') );
                navigate('/approvisonnementstock');
            }
          }else{
            setErroruplaod({ ...erroruplaod, value: "Identificartion incorrecte", color: 'red' });
          }
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout :', error); // Gestion des erreurs de réseau ou autres erreurs inattendues
        });
    };
    return(
      <>
      <div className='login'>
            <div className="login-container">
                  <div className="login-form">
                      <div className="profile-pic">
                          <img src={logo} alt="Profile Picture"/>
                      </div>
                      <h2>Bienvenue sur SmartStore</h2>
                      <p>Travaillez bien !</p>        
                      <p style={styles.error}>{erroruplaod.value}</p>    
                      <form onSubmit={submit}>
                          <div className="input-group">
                              <input type="text" id="username" name='login' placeholder="username" onChange={handleChange} />
                          </div>
                          <div className="input-group">
                              <input type="password" id="password" name='password'  placeholder="password" onChange={handleChange} />
                          </div>
                          <button type="submit">Login</button>
                      </form>
                      <div className="footer-links">
                          <a href="#">Si vous avez oublié votre mot de passe, veuillez contacter les responsables.</a> 
                      </div>        
                  </div>
              </div>
      </div>
            
      </>
        
    );
}