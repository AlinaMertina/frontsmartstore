import React from 'react';
import IconeRondColore from './iconeRondcolore/IconeRondColore';
import Message from './message/Message';

export default function Paragraphe({type,titre,description,lien}){
    return(
        <a className="dropdown-item preview-item" href={lien}>
            <IconeRondColore type={type} ></IconeRondColore>
            <Message titre={titre} description={description}></Message>
        </a>
    );
}