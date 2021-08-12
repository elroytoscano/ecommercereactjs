import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Product from '../pages/Product'
import About from '../pages/About'
import NoMatch from '../components/NoMatch'
import Navbar from '../components/NavBar/Navbar'
import GlobalStyles from '../global-styles'
import Sidebar from '../components/Sidebar/Sidebar'
import CartHolder from '../components/CartSidebar/CartHolder'

const routes = (
  <>
    <GlobalStyles />
    <Sidebar />
    <Navbar />
    <CartHolder />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/about' component={About} />
      <Route path='/product/:id' children={<Product />} />
      <Route path='*' component={NoMatch} />
    </Switch>
  </>
)

export default routes
