import React from 'react';

export default function Message({titre,description}){
    return(
        <div className="preview-item-content">
            <h6 className="preview-subject font-weight-normal">{titre}</h6>
            <p className="font-weight-light small-text mb-0 text-muted">
                {description}
            </p>
        </div>
    );
}

