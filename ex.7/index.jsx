import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <h1>Família</h1>
        <Family>
            <Member name="Cristiano" lastName="Moraes" />
        </Family>
    </div>
, document.getElementById('app'))

