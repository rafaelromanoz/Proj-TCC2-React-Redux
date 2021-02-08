import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import UserCrud from '../Cadastros/userCrud'
import Fornecedores from '../Cadastros/Fornecedores'
import Servicos from '../Cadastros/Servicos'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
            <Route path='userCrud' component={UserCrud}/>
            <Route path='Servicos' component={Servicos}/>  
            <Route path='Fornecedores' component={Fornecedores}/>
                  
        <Redirect from='*' to='/' />
        </Route>
    </Router>
)