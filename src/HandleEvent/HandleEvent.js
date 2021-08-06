import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //callback function => hàm đóng vai trò là tham số truyền vào biến hoặc hàm khác 
    handleClick = () => {

        alert('hello Phú');
    }

    showMess = (name) => {
        alert(`Hello ${name}`);
    }

    render() {
        return (
            <div>


                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                <button id="btnClick" onClick={() => {
                    alert('hello Phú');
                }}>Click me</button>

                <br />

                <button className="btn btn-success mt-2" onClick={() => {
                    this.showMess('Kiệt');
                    this.showMess('Aloalo');
                }}>Show message</button>
            </div>
        )
    }
}


