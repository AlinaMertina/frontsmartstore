
import React from 'react';

import '../../asset/css/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import '../../asset/css/vendors/feather/feather.css';
import '../../asset/css/js/select.dataTables.min.css';
import '../../asset/css/css/vertical-layout-light/style.css';
import '../../asset/css/css/styles.css';
import '../../asset/css/vendors/ti-icons/css/themify-icons.css';
import '../../asset/css/vendors/css/vendor.bundle.base.css';
import SidebarHorizontale from '../../component/sidebarHorizontale/SidebarHorizontale';
import SidebarVerticale from '../../component/sidebarVerticale/SidebarVerticale';
import dataNavbar from '../../datajson/statique/dataNavbar';
import logo from '../../datajson/statique/logo';
import notification from '../../datajson/dynamique/notification';
import infouser from '../../datajson/dynamique/infouser';

export default function Accueil(){
    
    return(
        <>
         <div class="body"  >
         <div class="row">
                <div class="col-2 nav ">
                    <SidebarVerticale dataMenuVerticale={dataNavbar.appprovisionnement}></SidebarVerticale>
                </div>
                {/* <CRUDutilisateur idrole={id}></CRUDutilisateur> */}
            </div>
         </div>
           
        </>
    );
}
