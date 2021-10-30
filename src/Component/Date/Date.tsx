import React, { Component } from 'react'
import './Date.css'

export default class  extends Component {
    state = {
        date: new Date()
    }

    render() {
        return (
            <div className="top">
                <h3>Today</h3>
                <p> {this.state.date.toLocaleDateString()}</p>
            </div>
        )
    }
}
