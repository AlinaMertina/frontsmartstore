import React from 'react';

export default function IconeRondColore({type}){
    return(
        <>
        {(() => {
            switch (type) {
              case 'succes':
                return  <div class="preview-icon bg-success">
                            <i class="ti-info-alt mx-0"></i>
                        </div>;
              case 'warning':
                return  <div class="preview-icon bg-warning">
                            <i class="ti-settings mx-0"></i>
                        </div>;
              default:
                return <div class="preview-icon bg-info">
                            <i class="ti-user mx-0"></i>
                        </div>;
            }
          })()}
        </>
    );
}


