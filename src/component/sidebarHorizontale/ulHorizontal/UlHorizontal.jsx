import React from 'react';
import Liactive from './liactive/Liactive';

export default function UlHorizontal({dataMenuHorizontal,nameactive}){
    return(
        <ul class="navbar-nav  linkvalue navbar-nav-right">
            {dataMenuHorizontal && dataMenuHorizontal.map((data,index)=>(
            nameactive===data.nom ? <Liactive key={index} lien={data.lien} nom={data.nom} active={true}> </Liactive>
            : <Liactive key={index} lien={data.lien} nom={data.nom} active={false}> </Liactive>  
            ))
            }
        </ul>
    );
}