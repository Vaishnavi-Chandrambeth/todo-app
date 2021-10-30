import React, { Component } from 'react'
import Header from '../Header/Header'
import List from '../List/List'
import Date from '../Date/Date'

export default class Todoapp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Date/>
                <List/>
            </div>
        )
    }
}
