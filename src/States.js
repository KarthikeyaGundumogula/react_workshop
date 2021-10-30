import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"karthikeya"
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:'Karthikeya Gundumogula'})
        },4478)
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}
