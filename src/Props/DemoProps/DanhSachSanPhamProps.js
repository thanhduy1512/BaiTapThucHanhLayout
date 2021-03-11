import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {



    //Component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là component con
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-4'>
                        <SanPhamProps />
                    </div>
                    <div className="col-4">

                    </div>
                    <div className='col-4'>
                        <SanPhamProps />
                    </div>
                </div>

            </div>
        )
    }
}
