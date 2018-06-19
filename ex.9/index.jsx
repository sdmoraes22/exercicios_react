import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName="Moraes">
            <Member name="Cristiano" />
            <Member name="Valéria" />
            <Member name="Ester" />
        </Family>
    </div>
, document.getElementById('app'))

