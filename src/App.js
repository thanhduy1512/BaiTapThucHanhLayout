import logo from './logo.svg';
import './App.css';
import Demofunction from './Components/DemoComponent/Demofunction';
import DemoClass from './Components/DemoComponent/DemoClass';
import CardProduct from './Components/DemoComponent/CardProduct';


import BaiTapLayOut1 from './Components/DemoComponent/BaiTapLayOut1/BaiTapLayOut1';
import Databinding from './Components/DemoComponent/Databinding/Databinding';
import Styles from './Components/DemoComponent/Styles/Styles';
import HandleEvent from './Components/DemoComponent/HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapLayoutMap from './RenderWithMap/BaiTapLayoutMap';
import BT3Header from './Components/DemoComponent/BaiTapThucHanhLayOut/BT3Header';
import DanhSachSanPhamProps from './Props/DemoProps/DanhSachSanPhamProps';


function App() {
  return (
    <div className="App container">
      {/*<BaiTapLayOut1 />*/}
      {/* <Databinding /> */}
      {/* <Styles /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      <DanhSachSanPhamProps />
    </div>
  );
}

export default App;
