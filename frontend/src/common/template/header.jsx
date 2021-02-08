import React from 'react'
import Navbar from './navBar'

export default props=>(
    <header className='main-header'>
        <a href='/#' className='logo'>
            <span className='logo-mini'><b>TCC2</b>Proj</span>
            <span className='logo-lg'>
                <i className='fa fa-server'>
                    <b> TCC2</b>Projeto
                </i>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar/>
        </nav>
    </header>
)