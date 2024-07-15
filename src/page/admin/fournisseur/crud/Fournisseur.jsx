
import React from 'react';

import '../../../../asset/css/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import '../../../../asset/css/vendors/feather/feather.css';
import '../../../../asset/css/js/select.dataTables.min.css';
import '../../../../asset/css/css/vertical-layout-light/style.css';
import '../../../../asset/css/css/styles.css';
import '../../../../asset/css/vendors/ti-icons/css/themify-icons.css';
import '../../../../asset/css/vendors/css/vendor.bundle.base.css';

import SidebarHorizontale from '../../../../component/sidebarHorizontale/SidebarHorizontale';
import SidebarVerticale from '../../../../component/sidebarVerticale/SidebarVerticale';
import dataNavbar from '../../../../datajson/statique/dataNavbar';
import notification from '../../../../datajson/dynamique/notification';
import infouser from '../../../../datajson/dynamique/infouser';
import CRUDsimple from '../../../../component/newcss/crud(1,1)/simple/CRUDsimple';
import logo from '../../../../datajson/statique/logo';

export default function Fournisseur(){
    const formaData={code:'',nom:''};
    const colonne=['code','nom'];
    return(
        <>
         <div class="body"  >
         <div class="row">
                <div class="col-2 nav ">
                    <SidebarVerticale dataMenuVerticale={dataNavbar.admin.navverticale.Article}></SidebarVerticale>
                </div>
                <CRUDsimple lien={'fournisseurs'} name={'Fournisseurs'} formaData={formaData}
                    colonne={colonne} ></CRUDsimple>
            </div>
         </div>
           
        </>
    );
}
