import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <ul>

                    <li><i className="material-icons">menu</i></li>
                    <li><i className="material-icons">home</i></li>
                    <li><input type="search"
                        placeholder="search"
                        className="input-search" /></li>
                </ul>
            </div>
        )
    }
}
