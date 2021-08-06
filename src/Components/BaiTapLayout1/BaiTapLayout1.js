import React, { Component } from 'react'
import BT1Footer from './BT1Footer'
import BT1Header from './BT1Header'
import BT1ProductList from './BT1ProductList'
import BT1Slider from './BT1Slider'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <BT1Header />
                <BT1Slider />
                <BT1ProductList />
                <BT1Footer />
            </div>
        )
    }
}
