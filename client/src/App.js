import HomePage from './pages/HomePage';
import CarListPage from './pages/CarListPage';
import LoginPage from './pages/LoginPage';
import { Link } from '@material-ui/core';
import { Routes,Router, Route,Navigate } from "react-router-dom";
import RentCarPage from './pages/RentCarPage';

 function App() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="danh-sach-xe" element={<CarListPage/>} />

          <Route path="danh-nhap" element={<LoginPage/>} />

          <Route path="thue-xe" >
            <Route path="?id" element={<RentCarPage/>} />
            <Route path="" element={<RentCarPage/>} />
          </Route>
        </Routes>
      );
}

export default App;