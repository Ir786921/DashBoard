import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import { useSelector } from 'react-redux';

const Layout = () => {
    const clicked = useSelector((store)=>store.sideBar.isvisible);
  return (
    <div className=' row tw-bg-[#263046]'>
     <div className="col-md-2 tw-p-0 tw-m-0"><SideBar /></div>
     
     <div className="col-md-10 tw-p-0 tw-m-0"><Body /></div>
     </div>
  )
}

export default Layout;