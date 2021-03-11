import React, { Component } from 'react'
import BT1Header from './BT1Header'
import BT1Productlist from './BT1Productlist'
import BTCarousel from './BTCarousel'
import LapTop from './LapTop'
import Promotion from './Promotion'

export default class extends Component {
    render() {
        return (
            <div>
                <BT1Header />
                <BTCarousel />
                <BT1Productlist />
                <LapTop />
                <Promotion />
            </div>
        )
    }
}
