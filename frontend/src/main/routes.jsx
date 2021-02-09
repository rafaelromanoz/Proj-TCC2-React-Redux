import React from 'react'
import {Switch,Route,Redirect} from 'react-router'


import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import UserCrud from '../Cadastros/userCrud'
import Fornecedores from '../Cadastros/Fornecedores'
import Servicos from '../Cadastros/Servicos'

export default props => (
   <div className='content-wrapper'>
       <Switch>
       <Route exact path='/' component={Dashboard}/>
       <Route path='/billingCycles' component={BillingCycle}/>
       <Route path='/userCrud' component={UserCrud}/>
       <Route path='/Fornecedores' component={Fornecedores}/>
       <Route path='/Servicos' component={Servicos}/>
       <Redirect from='*' to='/'/>
       </Switch>
   </div>
)