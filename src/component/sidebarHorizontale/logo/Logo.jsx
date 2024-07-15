
import React from 'react';
import config  from '../../../config/config';

export default function  Logo(min,max){

    return (
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo mr-5" href="##">
           <img src={`${config.baseURL}/${max}`} alt="profile" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="##">
            <img src={`${config.baseURL}/${min}`} alt="profile" />
          </a>
        </div>
    );

}