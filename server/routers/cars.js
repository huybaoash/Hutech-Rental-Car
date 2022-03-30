import express from 'express';  // cài thư viện này để hỗ trợ routing cho Server
import { getCars, createCar, updateCar,removeCar } from '../controllers/cars.js'; 
// Lấy các hàm xử lý dữ liệu của cars từ thư mục controllers

const router = express.Router();
//http://localhost:5000/cars 


router.get('/', getCars); // http://localhost:5000/cars phương thức GET là sử dụng hàm getCars để lấy danh sách Car

router.post('/', createCar);// http://localhost:5000/cars phương thức POST là sử dụng hàm createCar để tạo Car

router.post('/update', updateCar); // http://localhost:5000/cars/update phương thức POST là sử dụng hàm updateCar để cập nhật Car

router.post('/remove', removeCar); // http://localhost:5000/cars/remove phương thức POST là sử dụng hàm removeCar để xóa Car

export default router;
// khai báo cái này để bên index.js ở ngoài gọi để sử dụng dc 
