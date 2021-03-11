import React from 'react'

export default function Demofunction() {
    //Đối với function component bên dưới lệnh return sẽ là giao diện của thẻ <DemoFunction/>
    //: Lưu ý nội dung của thẻ phải đc bao phủ 1 thẻ
    return (
        <div>
            <p className="p-2 bg-dark text-light">
                Hello
            </p>
        </div>
    )
}
