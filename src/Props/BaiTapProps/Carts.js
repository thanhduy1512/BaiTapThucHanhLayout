import React, { Component } from 'react'

export default class Carts extends Component {
    
    renderGioHang = () => {
        //Lấy dữ liệu từ component cha truyền vào  thông qua props
        let {gioHang}  = this.props;
        return gioHang.map((spGH,index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt={spGH.tenSP} width={50} /></td>
                <td>{spGH.gia.toLocaleString()}</td>
                <td>
                    <button className="btn btn-success mr-1" onClick={()=>{
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}>+</button>
                    {spGH.soLuong.toLocaleString()}
                    <button className="btn btn-success ml-1" onClick={()=>{
                         this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}>-</button>
                
                </td>
                <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={()=> {
                    this.props.xoaGioHang(spGH.maSP);
                }}>Xoá</button></td>
            </tr>
        });
    }
    
    render() {

        // let {gioHang}  = this.props;

        return (
            <div className="container">
                <h1>Giỏ hàng (1)</h1>
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
