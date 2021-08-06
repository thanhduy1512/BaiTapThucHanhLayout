import React, { Component } from 'react'
import BT1Product from './BT1Product'

export default class BT1ProductList extends Component {
    render() {
        return (
            <div className="bg-dark text-light container-fluid">
                <h1 className="display-4 text-center">BEST SMART PHONE</h1>
                <div className="row  text-dark">
                    <div className="col-3">
                        <BT1Product />
                    </div>
                    <div className="col-3">
                        <BT1Product />
                    </div>
                    <div className="col-3">
                        <BT1Product />
                    </div>
                    <div className="col-3">
                        <BT1Product />
                    </div>
                </div>
            </div>
        )
    }
}
