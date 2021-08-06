import React, { Component } from 'react'

export default class StateDemo extends Component {

    //State là thuộc tính có sẵn của component chứa các giá trị làm thay đổi giao diện khi người dụng thao tác
    state = {
        isLogin : false
    }


    // isLogin = false;
    userName = 'phudeptrai';

    renderUILogin = () =>{
        
        if(this.state.isLogin) {
            return <span>Hello {this.userName}</span>
        }

        return <button onClick={()=>{
            // let newState = {
            //     isLogin : true
            // }
            //this.setState(newState): là phương thức có sẵn của reactClass component dùng để gán lại giá trị mới cho state => đồng thời gọi lại hàm render tạo lại giao diện. 
            //setState là phương thức bất đồng bộ
            this.setState({
                isLogin : true
            },function( ){
                console.log('isLogin',this.state.isLogin);
            })
            

            
        }}>Đăng nhập</button>
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">
                                    {this.isLogin === false ? <span>Đăng nhập</span> : `Hello ${this.userName}` }
                                </a> */}

                                {this.renderUILogin()}

                            </li>
                          
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}
