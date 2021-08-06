import React, { Component } from 'react'
//Cách 1: import đường dẫn css từ file component
// import './styles.css';
//Cách 2: import css tại component
import style from './styles.module.css'


export default class Styles extends Component {

    render() {
        const color = 'red';
        return (
            <div className="container">
                <p className="text-red">cybersoft</p>

                <p className={style.textGreen}>ahihi</p>
                <p className={style['textGreen']}>ahihi</p>
                <p className={`${style['textGreen']} ${style['bg-black']} display-4`}>ahihi</p>


                <section style={{
                    backgroundColor:'black',
                    color:color
                }}>component</section>
            </div>
        )
    }
}
