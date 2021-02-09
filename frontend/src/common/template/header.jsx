import React from 'react'
import Navbar from './navBar'
import {FaTooth} from 'react-icons/fa'



export default props=>(
    <header className='main-header'>
        <a href='/#' className='logo'>
            <span className='logo-mini'><b>Sis</b>Prot</span>
            <span className='logo-lg'>
                <i className='fas fa-tooth'>
                    <FaTooth/><b> Sis </b> Prot
                </i>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar/>
        </nav>
    </header>
)