
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
import CRUDSimple from '../../../../component/crudsimple/CRUDSimple';
import logo from '../../../../datajson/statique/logo';

export default function Unitees(){
    return(
        <div className="container-scroller">
            <SidebarHorizontale datalogo={logo.admin} dataUlHorizontal={dataNavbar.admin.navhorizontale} datanotification={notification} infouser={infouser.image} name={'Article'}></SidebarHorizontale>
            <div className="container-fluid page-body-wrapper">
                <SidebarVerticale dataMenuVerticale={dataNavbar.admin.navverticale.Article}></SidebarVerticale>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <CRUDSimple lien={'unitees'} size={6} name={'Unitees'} ></CRUDSimple>
                    </div>
                </div>
            </div>
        </div>
    );
}
