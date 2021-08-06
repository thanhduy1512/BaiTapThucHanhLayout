import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            numberObject: {
                num: 1
            }
        }
        console.log('contructor')
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');

        return currentState;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render')
        return (
            <div className="container mt-5">
                <ChildComponent numberObject={this.state.numberObject} />
                <h1>{this.state.numberObject.num}</h1>
                <button className="btn btn-success" onClick={() => {
                    let numberObject = this.state.numberObject;
                    numberObject.num += 1;
                    this.setState({
                        numberObject: numberObject
                    })
                }}>+</button>

            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')

    }
    componentDidUpdate() {
        //hạn chế setState (muốn setState phải có if)
        console.log('componentDidUpdate')
    }
}
