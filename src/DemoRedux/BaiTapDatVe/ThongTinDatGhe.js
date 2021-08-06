import React, { Component } from 'react'
//Import thư viện kết nối với redux
import {connect} from 'react-redux';


 class ThongTinDatGhe extends Component {
    render() {

        let {dispatch} = this.props;//Kết nối với redux thông connect => tự động sinh props này
        return (
            <div className="text-white ">
                <h1 className="display-4 text-center mb-5">Danh sách ghế đang chọn</h1>
                <div className="text-left">
                    <button className="gheDangChon m-0"></button> Ghế đang chọn
                </div>
                <div className="text-left">
                    <button className="ghe m-0"></button> Ghế chưa chọn
                </div>
                <div className="text-left">
                    <button className="gheDuocChon m-0"></button> Ghế chưa chọn
                </div>

                <table className="table text-white">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{ 
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button onClick={()=>{
                                    //Tạo action 
                                    const action = {
                                        type:'XOA_GHE',
                                        soGhe:gheDangDat.soGhe
                                    };
                                    //Dùng hàm dispatch gửi giá trị lên reducer
                                    dispatch(action);
                                }}>X</button></td>
                            </tr>  
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //Lấy state danhSachGheDangDat từ reducer về tạo thành props của component
    return {
        danhSachGheDangDat:state.baiTapDatVeReducer.danhSachGheDangDat
    }
}


// const mapDispatchToProps = (dispatch) => {

// }


export default connect(mapStateToProps) (ThongTinDatGhe);