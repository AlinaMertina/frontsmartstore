import React from 'react';

export default function SpanIcone({icone}){
    return(
        <button  id="sidebaricone"class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class={icone}></span>
        </button>
    );
}