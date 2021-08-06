const initialState = {
    mangSinhVien:[
        {maSinhVien:1,tenSinhVien:'Nguyễn văn a',soDienThoai:'09090909',email:'nguyenvana@gmail.com'},
        {maSinhVien:2,tenSinhVien:'Nguyễn văn b',soDienThoai:'08080808',email:'nguyenvanb@gmail.com'},
    ], //Dữ liệu sinh viên của table

    sinhVienSua: {
        maSinhVien:'5',
        tenSinhVien:'Nguyễn Văn E',
        soDienThoai:'09090909',
        email:'nguyenvane@gmail.com'
    }

}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'THEM_SINH_VIEN': {
        //Thêm action sinh viên vào state => cập nhật lại state
        state.mangSinhVien = [...state.mangSinhVien,action.sinhVien];

        return {...state}
    }

    case 'XOA_SINH_VIEN': {
        state.mangSinhVien =  [...state.mangSinhVien.filter(sv => sv.maSinhVien !== action.maSinhVien)]; //immutable
        return {...state};    
    }

    case 'SUA_SINH_VIEN': {
        
        state.sinhVienSua = action.sinhVienSua;

        return {...state};
    }

    default:
        return state
    }
}



// const object = {
//     id:1,
//     name:'abc'
// }
// object.id = 2;

// object = {id:2,name:'abc'}