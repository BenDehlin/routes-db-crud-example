import React from 'react'
import {Switch, Route} from 'react-router-dom'
import List from './Components/List'
import Form from './Components/Form'

export default (
    <Switch>
        <Route exact path = '/' component = {List} />
        <Route exact path = '/form' component = {Form} />
        <Route path = '/form/:id' component = {Form} />
    </Switch>
)