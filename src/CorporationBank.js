import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render(props) {
        return (
            <div>
                <h1>CorporationBank {this.props.info.firstname}</h1>
            </div>
        )
    }
}
