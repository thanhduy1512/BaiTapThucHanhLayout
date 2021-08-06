import { combineReducers, createStore } from 'redux';
import { baiTapDatVeReducer } from './reducers/baiTapDatVeReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import quanLySinhVienReducer from './reducers/quanLySinhVienReducer';




const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng
    gioHangReducer,
    baiTapDatVeReducer,
    quanLySinhVienReducer
    // reducerA: gioHangReducer,
    // reducerB: gioHangReducer

})


export const store = createStore(rootReducer);