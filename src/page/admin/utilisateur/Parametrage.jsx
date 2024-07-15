
import React from 'react';

import '../../../asset/css/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import '../../../asset/css/vendors/feather/feather.css';
import '../../../asset/css/js/select.dataTables.min.css';
import '../../../asset/css/css/vertical-layout-light/style.css';
import '../../../asset/css/css/styles.css';
import '../../../asset/css/css/stylea.css';

import '../../../asset/css/vendors/ti-icons/css/themify-icons.css';
import '../../../asset/css/vendors/css/vendor.bundle.base.css';
import SidebarHorizontale from '../../../component/sidebarHorizontale/SidebarHorizontale';
import SidebarVerticale from '../../../component/sidebarVerticale/SidebarVerticale';
import dataNavbar from '../../../datajson/statique/dataNavbar';
import logo from '../../../datajson/statique/logo';
import notification from '../../../datajson/dynamique/notification';
import infouser from '../../../datajson/dynamique/infouser';
import { useParams } from 'react-router-dom';

import Lecturesimple from '../../../component/newcss/lecturesimple/Lecturesimple';


{/* <link rel="stylesheet" href="../vendors/feather/feather.css">
<link rel="stylesheet" href="../vendors/ti-icons/css/themify-icons.css">
<link rel="stylesheet" href="../vendors/css/vendor.bundle.base.css">

<link rel="stylesheet" href="../vendors/datatables.net-bs4/dataTables.bootstrap4.css">
<link rel="stylesheet" href="../vendors/ti-icons/css/themify-icons.css">
<link rel="stylesheet" type="text/css" href="js/select.dataTables.min.css">
<!-- End plugin css for this page -->
<!-- inject:css -->
<link rel="stylesheet" href="../css/vertical-layout-light/style.css">
<link rel="stylesheet" href="../css/styles.css">
<link rel="stylesheet" href="../vendors/mdi/css/materialdesignicons.min.cs">
<link rel="stylesheet" href="../vendors/mdi/css/materialdesignicons.min.cs"></link> */}

export default function Parametrage(){
    // const { id } = useParams();
    return(
        <>
         <div class="body"  >
         <div class="row">
                <div class="col-2 nav ">
                    <SidebarVerticale dataMenuVerticale={dataNavbar.admin.navverticale.Article}></SidebarVerticale>
                </div>
                <Lecturesimple></Lecturesimple>
            </div>
         </div>
           
        </>
    );
}
