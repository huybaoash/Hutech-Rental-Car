import HomePage from './pages/HomePage';
import CarListPage from './pages/CarListPage';
import LoginPage from './pages/LoginPage';
import { Link } from '@material-ui/core';
import { Routes,Router, Route,Navigate } from "react-router-dom";

 function App() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="danh-sach-xe" element={<CarListPage/>} />

          <Route path="danh-nhap" element={<LoginPage/>} />
        </Routes>
      );
}

export default App;