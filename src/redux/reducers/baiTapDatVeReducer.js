
const stateDefault = {
    danhSachGheDangDat: [
        {"soGhe":"A1","gia":75000},
    ]
}


export const baiTapDatVeReducer = (state = stateDefault,action) => {

    switch(action.type){
        case 'DAT_GHE': {
            //Kiểm tra ghế có trong state.danhSachGheDangDat không? => Nếu có xoá đi , ngược lại không có thêm vào
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatCapNhat.findIndex(gheDD => gheDD.soGhe === action.thongTinGhe.soGhe);

            if(index !==-1) { //Tồn tại trong mảng khi click => xoá đi
                danhSachGheDangDatCapNhat.splice(index,1);
            }else {
                danhSachGheDangDatCapNhat.push(action.thongTinGhe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
            return {...state}
        }
        case 'XOA_GHE':{
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];

            //Tìm ra soGhe được click có trong mảng hay không
            let index = danhSachGheDangDatCapNhat.findIndex(gheDD => gheDD.soGhe === action.soGhe );

            //Xử lý xoá
            if(index !== -1) {
                danhSachGheDangDatCapNhat.splice(index,1);
            }
            //Cập nhật lại state
            state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
            return {...state};

        }

    }

    return {...state};
}