
const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'iphone x', gia: 1000, soLuong: 1, hinhAnh: 'https://picsum.photos/200/200' }
    ]
}



export const gioHangReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG': {
            //Xử lý thay đổi state
            console.log('action',action);
            //Cập nhật giỏ hàng 
            let gioHangCapNhat = [...state.gioHang];

            //Kiểm tra sản phẩm đó có trong giỏ hang hay không
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);

            if(index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            }else {
                gioHangCapNhat.push(action.spGioHang);
            }
            //Cập nhật lại state tương ứng setState
            state.gioHang = gioHangCapNhat;
            console.log('state',state.gioHang)
            return {...state};
        };break;
        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = [...state.gioHang];

            //Tìm sp được click nút xoá
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1) {
                gioHangCapNhat.splice(index,1);
            }
            //Cập nhật lại state
            state.gioHang = gioHangCapNhat; 
            return {...state};
        }
        case 'TANG_GIAM_SO_LUONG': {
            const gioHangCapNhat = [...state.gioHang];

            //Tìm sản phẩm có mã được click
            const index = gioHangCapNhat.findIndex(spGH=>spGH.maSP === action.maSP);
            if(index !== -1){

                gioHangCapNhat[index].soLuong += action.soLuong;

                if(gioHangCapNhat[index].soLuong < 1) {
                    alert('Số lượng tối thiểu phải là 1!')
                    gioHangCapNhat[index].soLuong -= action.soLuong;
                    return {...state};
                }
            }
            //Gán lại state
            state.gioHang = gioHangCapNhat;
            return {...state};

        }

    }
    return state;
}