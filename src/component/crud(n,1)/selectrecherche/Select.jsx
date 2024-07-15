import React,{useState,useEffect} from 'react';
import axios from 'axios';
import config from '../../../config/config';
export default function Select({name,datalien,setDefaultvalue}){
    const [liste, setListe] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(liste);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const getliste= async () => {
        console.log(config.lienCrudmetier+datalien);
        axios.get(config.lienCrudmetier+datalien)
        .then(response => {
            const responseData = response.data;
            setListe(responseData.data);
            setFilteredOptions(responseData.data);
            console.log(filteredOptions);
        })
        .catch(error => {
            console.log(error);
        });
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        // handleChange(event);
        const filtered = liste.filter(option =>
          option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        setDropdownVisible(true);
    };
    const handleOptionClick = (option) => {
        setInputValue(option.nom);
        setDefaultvalue(option);
        setDropdownVisible(false);
      };
    useEffect( () => {
       getliste();
       console.log(liste);
    }, []);

    return(
        <div className="form-group">
        <label htmlFor="exampleInputUsername1">{name}</label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={handleInputChange}
            onClick={() => setDropdownVisible(true)}
          />
          {isDropdownVisible && (
            <ul className="dropdown">
              {filteredOptions && filteredOptions.length > 0 ? (
                filteredOptions.map(option => (
                  <li key={option.id} onClick={() => handleOptionClick(option)}>
                    {option.nom}
                  </li>
                ))
              ) : (
                <li>Option non trouvée</li>
              )}
            </ul>
          )}
        </div>
      </div>
      
    );
  
  }
