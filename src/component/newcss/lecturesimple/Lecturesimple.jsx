import React, { useEffect, useRef,useState }  from 'react';
import SummerDroit from './summer/SummerDroit';
import Roletvanotif from './information/Roletvanotif';
export default function Lecturesimple(){

    const [mot, setMot] = useState('null');
    const [choixsummer, setChoixsummer] = useState(3);
    const [choixlecture, setChoixlecture] = useState(1);
    const data1=[
        {id:1,nom:'Role tva notification',active:true},
        {id:2,nom:'Test value',active:false}
    ];
    const [data,setData]=useState(data1);

    const pagelecture= async (index1) => {
        setData(data.map((value) => (
            value.id === index1 
                ? { ...value, active: true } 
                : { ...value, active: false }
        )));
        
    };

    const doRecherche= async (e) => {
        e.preventDefault();
        for(let i = 0; i < data.length; i++) {
            if (data[i].nom.toLowerCase().includes(mot.toLowerCase())) {
                console.log(data[i].nom);
                setChoixlecture(data[i].id);
                return;
        
            }    
        }
        setChoixlecture(1);
    };

    let content;
    switch (choixlecture) {
        case 1:
            content = <Roletvanotif name={'page1'} setMot={setMot} mot={mot} setChoix={setChoixsummer} doRecherche={doRecherche}></Roletvanotif>
            break;
        case 2:
                content = <Roletvanotif name={'page2'}  setMot={setMot} mot={mot} setChoix={setChoixsummer} doRecherche={doRecherche}></Roletvanotif>
                break;
        default:
            content=null;
            break;
    }
    return(
        <>
            <div class="col-10 corps" >
                <div class="row">
                    {content}
                    <SummerDroit choix={choixsummer} setMot={setMot}  pagelecture={pagelecture}
                    mot={mot} setChoix={setChoixsummer} doSearch={doRecherche} 
                    data={data} setChoixlecture={setChoixlecture} ></SummerDroit>
                </div>
            </div>
        </>
    );


}