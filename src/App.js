import logo from './logo.svg';
import './App.css';
import DemoFunction from './Components/DemoComponent/DemoFunction';
import DemoClass from './Components/DemoComponent/DemoClass';
import CardProduct from './Components/DemoComponent/CardProduct';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import Styles from './Components/Styles/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapLayoutMap from './RenderWithMap/BaiTapLayoutMap';
import DanhSachSanPhamProps from './Props/DemoProps/DanhSachSanPhamProps';
import Products from './Props/BaiTapProps/Products';
import BaiTapGioHangRedux from './DemoRedux/BTGioHangRedux/BaiTapGioHangRedux';
import BaiTapDatVe from './DemoRedux/BaiTapDatVe/BaiTapDatVe';
import FormReact from './FormReact/FormReact';
import LifeCycle from './LifeCycle/LifeCycle';
import DemoUseRef from './Hook/DemoUseRef';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      {/* <Styles />
        <p className="text-red">cybersoft app component</p>
        <p className="textGreen">Bootcamp 04 app component</p> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}

      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSanPhamProps /> */}
      {/* <Products /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapDatVe /> */}
      {/* <FormReact /> */}
      {/* <LifeCyc/le /> */}
      <DemoUseRef />
    </div>
  );
}

export default App;
