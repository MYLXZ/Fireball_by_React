import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Discover from './components/Discover'
import Personal from './components/Personal'
import MyOrders from './components/MyOrders'
import MySubscriptions from './components/MySubscriptions'
import MyLikes from './components/MyLikes'
import Coupons from './components/Coupons'
import Helps from './components/Helps'
import Settings from './components/Settings'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Personal} />
            <Route path="/home" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/personal" component={Personal} />
            <Route path="/personal/order" component={MyOrders} />
            <Route path="/personal/subscription" component={MySubscriptions} />
            <Route path="/personal/like" component={MyLikes} />
            <Route path="/personal/coupon" component={Coupons} />
            <Route path="/personal/help" component={Helps} />
            <Route path="/personal/setting" component={Settings} />
        </Router>
    ),
    document.getElementById('content')
);