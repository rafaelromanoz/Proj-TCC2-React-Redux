
import React from 'react'
import {HashRouter} from 'react-router-dom'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import UserCrud from '../Cadastros/userCrud'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Routes from './routes'

export default props => (
    <HashRouter>
    <div className='wrapper'>
    <FontAwesomeIcon icon={faHome} />
        <Header />
       
        <SideBar />
        <Routes></Routes>
           
      
        
       
        <Footer />
        <Messages />
    </div>
    </HashRouter>
)