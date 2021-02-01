import React from 'react'
import {Router,Route,Redirect,hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import UserCrud from '../cadastros/userCrud'


export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Route path='/userCrud' component={UserCrud}/>
        <Redirect from ='*' to ='/'/>
    </Router>
)
