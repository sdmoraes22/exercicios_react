import React from 'react'
import ReactDOM from 'react-dom'
import { combinedReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

const reducers = combinedReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={ createStore (reducers)} >
        <Field  initialValue='Teste' />    
    </Provider>
,document.getElementById('app'))