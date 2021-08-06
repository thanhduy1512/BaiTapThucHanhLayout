import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'iphone x', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, name: 'iphone xs', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, name: 'iphone xs max', price: 3000, img: 'https://picsum.photos/200/200' },
    ]

    renderProduct = () => {
        // let arrDivProduct = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     //Mỗi lần duyệt lấy ra 1 object trong mảng
        //     let product = this.productList[i];
        //     const jsxDivProduct = <div className="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src={product.img} alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     arrDivProduct.push(jsxDivProduct);
        // }
        const contentJSX = this.productList.map((product, index) => {
            return <div key={index} className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        });
        return contentJSX; //[<div></div>,<div></div>]
    }

    
    renderTableProduct = () => {
        return this.productList.map((product,index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.img} width="50" alt={product.name} /></td>
                <td>{product.price}</td>
            </tr>
        });
    }



    render() {
        return (
            <div className="container">
                <h1 className="text-center display4">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                               <th>id</th>
                               <th>name</th>
                               <th>img</th>
                               <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableProduct()}
                        </tbody>
                    </table>

                </div>


            </div>

        )
    }
}
