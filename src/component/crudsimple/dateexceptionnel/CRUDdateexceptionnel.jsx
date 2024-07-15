import React,{useState,useEffect} from 'react';
import config from '../../../config/config';
import Header from './header/Header';
import Table from './table/Table';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

import '../../../asset/css/vendors/feather/feather.css';
import '../../../asset/css/vendors/ti-icons/css/themify-icons.css';
import '../../../asset/css/vendors/css/vendor.bundle.base.css';
import '../../../asset/css/fontawesome-5/css/all.css';
import '../../../asset/css/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import '../../../asset/css/js/select.dataTables.min.css';
import '../../../asset/css/css/vertical-layout-light/style.css';
import '../../../asset/css/ownCSS/Service.css';
import '../../../asset/css/ownCSS/style.css';
import '../../../asset/css/fontawesome-5/font-ubuntu.css';
import '../../../asset/css/vendors/mdi/css/materialdesignicons.min.css';

export default function CRUDdateexceptionnel(){
    const [data, setData] = useState(null);
    const [debut, setDebut] = useState('null');
    const [fin, setFin] = useState('null');
    const size=6;
    const reInitialisationVu = async () => {
        axios.get(config.lienCrudmetier+'date_exceptionnels/page/0/'+size+'/'+debut+'/'+fin)
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          setData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    useEffect(() => {
    reInitialisationVu();
    }, []);
    return(
        <div className="row whitebackcolor">
          <Header setData={setData} size={size} debut={debut} fin={fin} setDebut={setDebut} setFin={setFin}></Header>
          <Table data={data} ></Table>
          <Pagination setData={setData}   size={size} debut={debut} fin={fin}></Pagination>
        </div>
    );


}
