import React, { Component } from 'react';
import { connect } from 'react-redux'

class SanPhamRedux extends Component {


    render() {
        console.log('props', this.props);
        let productItem = this.props.sanPham;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={productItem.hinhAnh} alt={productItem.tenSP} height="300" />
                    <div className="card-body">
                        <h4 className="card-title">{productItem.tenSP} </h4>
                        <button className="btn btn-success" onClick={() => {
                            this.props.viewDetail(productItem)
                        }}>Xem chi tiết</button>
                        <button className="btn btn-danger ml-2" onClick={() => {
                            this.props.themGioHang(productItem)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {//=> dispatch giống như phương thức setState trong reactClass component 
    return {
        themGioHang: (spClick) => {
            // console.log('spClick',spClick);
            //Từ spClick tạo ra sp giỏ hàng
            const spGioHang = {
                maSP: spClick.maSP,
                tenSP: spClick.tenSP,
                gia: spClick.giaBan,
                soLuong: 1,
                hinhAnh: spClick.hinhAnh
            };
            //Đóng gói dữ liệu gửi lên store
            const action = {
                type:'THEM_GIO_HANG', //Đây là thuộc tính bắt buộc để reducer nhận biến giá trị xử lý
                spGioHang:spGioHang
            };
            //Gửi action lên reducer
            dispatch(action);

        }
    }
}
// const mapStateToProps = state => {
//     return {}
// }

//Kết nối component với store
export default connect(null, mapDispatchToProps)(SanPhamRedux)