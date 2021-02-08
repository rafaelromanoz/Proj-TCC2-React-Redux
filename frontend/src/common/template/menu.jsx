import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import UserCrud from '../../Cadastros/userCrud'
import Fornecedores from '../../Cadastros/Fornecedores'
import Servicos from '../../Cadastros/Servicos'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        
        <MenuTree label='Cadastro' icon='edit'> 
        <MenuItem  path='userCrud' label='Clientes' icon='users'/>
        <MenuItem path='Fornecedores' label='Fornecedores' icon='server'/>
        <MenuItem path='Servicos' label='Serviços' icon='clipboard'/>
        <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
            
    </ul>
)