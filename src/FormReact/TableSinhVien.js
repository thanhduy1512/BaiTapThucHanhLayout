import React, { Component } from 'react'
import {connect} from 'react-redux'
class TableSinhVien extends Component {

    setState() {
        
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangSinhVien.map((sinhVien,index)=>{
                            return <tr key={index}>
                                <td>{sinhVien.maSinhVien}</td>
                                <td>{sinhVien.tenSinhVien}</td>
                                <td>{sinhVien.email}</td>
                                <td>{sinhVien.soDienThoai}</td>
                                <td> 
                                    <button type="button" onClick={()=>{
                                        //Bấm vào nút sửa sẽ gửi dữ liệu tại dòng đó lên reducer
                                        this.props.dispatch({
                                            type:'SUA_SINH_VIEN',
                                            sinhVienSua: sinhVien
                                        })

                                    }}>Sửa</button>
                                    <button type="button" onClick={()=>{

                                        //Gửi mã sinh viên lên reducer
                                        this.props.dispatch({
                                            type:'XOA_SINH_VIEN',
                                            maSinhVien: sinhVien.maSinhVien
                                        })
                                    }}>Xoá</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{

    return {
        mangSinhVien: state.quanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien)



