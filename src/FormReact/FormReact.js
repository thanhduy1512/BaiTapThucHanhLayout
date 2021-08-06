import React, { Component } from 'react'
import TableSinhVien from './TableSinhVien';
import {connect} from 'react-redux';
class FormReact extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }, errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }

    }

    handleChangeInput = (event) => {
        let { name, value } = event.target;//event.target là tag input đang xảy ra onchange

        //lấy typeProps(tên tự đặt) của thẻ để xác định email hay phone ...
        let typeProps = event.target.getAttribute('typeProps');

        //Tạo value mới mỗi lần nhập liệu
        let newValue = {...this.state.values};

        // this.state.values['maSinhVien'] = value;
        newValue[name] = value;

        //Tạo errors mới mỗi lần nhập liệu
        let newErrors = {...this.state.errors}
        //this.state.errors['maSinhVien'] = tên lỗi

        let errorMess = ''
        //Kiểm tra rổng
        if(newValue[name] === '') {
            errorMess = 'Không được bỏ trống !';
        
        };
        if(typeProps === 'email') {
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(!regexEmail.test(value)){
                errorMess = 'Email không hợp lệ!'
            }
        }
        newErrors[name] = errorMess;
        //Xử lý setState
        this.setState({
            values:newValue,
            errors:newErrors
        })
    }

    handleSubmit = (event) => {
        //Cản sự kiện submit browser
        event.preventDefault(); // Phương thức cản sự kiện submit 
        //Kiểm tra dữ liệu hợp lệ (tất cả key của this.state.values phải khác rổng & tất cả key của errors phải = rổng)
        let valid = true;
        let {values,errors} = this.state;
        //(1) Duyệt values
        for(let key in values){ //key = 'maSinhVien' , key= 'tenSinhVien' ,....
            if(values[key] === '' ) //this.state.values['maSinhVien']
            {
                valid = false;
            }
        }
        //(2) Duyệt errors 
        for(let key in errors) {
            if(errors[key] !=='') { //this.state.errors['maSinhVien] 
                valid = false;
            }
        }
        if(!valid) { //Điều kiện không hợp lệ
            alert('Dữ liệu không hợp lệ !');
            return ;
        }

        //Hợp lệ => dispatch lên redux
        this.props.dispatch({
            type:'THEM_SINH_VIEN',
            sinhVien:this.state.values
        })


        console.log(this.state.values,'values');
    }

    componentWillReceiveProps(newProps){ //props mới 

        this.setState({
            values: newProps.sinhVienSua
        })

    }

    render() {
        let {maSinhVien,tenSinhVien,soDienThoai,email} = this.state.values;
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="card text-white bg-dark">
                    <div className="card-header">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group" >
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={maSinhVien}/>
                                    <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group" >
                                    <p>Số diện thoại</p>
                                    <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput}  value={soDienThoai}/>
                                    <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group" >
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien} />
                                    <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                                <div className="form-group" >
                                    <p>Email</p>
                                    <input typeProps="email" className="form-control" name="email" type="email" value={email} onChange={this.handleChangeInput} />
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success">Thêm sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableSinhVien />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.quanLySinhVienReducer.sinhVienSua
    }
}




export default connect(mapStateToProps)(FormReact);