import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import UserCrud from '../../Cadastros/userCrud'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuItem  path='userCrud' label='Clientes' icon='users'/>
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='usd' />
            </MenuTree>
            
    </ul>
)