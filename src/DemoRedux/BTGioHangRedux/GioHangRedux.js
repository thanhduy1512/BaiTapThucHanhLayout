import React, { Component } from 'react'
//Kết nối component với store từ redux
import { connect } from 'react-redux';

class GioHangRedux extends Component {


    renderGioHang = () => {
        return this.props.gioHangProps.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} alt={spGH.gia} /></td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}>+</button>
                    {spGH.soLuong}
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}>-</button>
                </td>
                <td>{spGH.soLuong * spGH.gia}</td>
                <td><button onClick={() => {
                    this.props.xoaGioHang(spGH.maSP);
                }}>Xoá</button></td>
            </tr>
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => { //ghi chú state chính là rootReducer (state tổng của ứng dụng)
    //Hàm này tạo ra props từ state của redux
    return {
        gioHangProps: state.gioHangReducer.gioHang
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            console.log('maSP', maSP);
            //Tạo ra action đưa dữ liệu lên reducer
            const action = {
                type: 'XOA_GIO_HANG',
                maSP
            };
            //Dùng hàm dispatch để gửi dữ liệu lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, soLuong) => {
           
            //Dùng hàm dispatch đưa dữ liệu lên reducer
            dispatch({
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                soLuong
            })
        }
    }
}


//Biến đổi BaiTapGioHangRedux thành BaiTapGioHang có kết nối với redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);