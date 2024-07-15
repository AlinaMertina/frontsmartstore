import React,{useState,useEffect}  from 'react';
import config from '../../../config/config';
import Header from './header/Header';
import Table from './table/Table';
import Pagination from '../../crudsimple/pagination/Pagination';
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


export default function CRUDtva({lien,size,name}){
    const [data, setData] = useState(null);
    const [mot, setMot] = useState('null');
  
    const reInitialisationVu = async (debut ,size) => {
      axios.get(config.lienCrudmetier+lien+'/page/'+debut+'/'+size+'/'+mot)
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
    reInitialisationVu(0,size);
  }, []);

    return(
        <div className="row whitebackcolor">
          <Header lien={lien} setData={setData} setMot={setMot} mot={mot} size={size} name={name} reInitialisationVu={reInitialisationVu}></Header>
          <Table data={data} lien={lien} name={name}></Table>
          <Pagination lien={lien} setData={setData}   size={size} mot={mot}></Pagination>
        </div>
    );
}
