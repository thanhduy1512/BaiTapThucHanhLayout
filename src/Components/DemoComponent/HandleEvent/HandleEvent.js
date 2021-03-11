import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // callback function => hàm đóng vai trò là tham số truyền vào biến hoặc hàm khác
    handleClick = () => {
        alert('hello Duy');
    }

    showMess = (name) => {
        alert(`hello ${name}`);
    }

    render() {
        return (
            <div>

                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                <button id="btnClick" onClick={() => {
                    alert('hello Duy');
                }}>Click me</button>
                <br />
                <button className="btn btn-success mt-2" onClick={() => {
                    this.showMess('Duy');
                    this.showMess('Alo');
                }}>Show Message</button>
            </div>
        )
    }
}
