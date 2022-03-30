//nodemon giúp ta không phải khởi động lại server khi có chỉnh sửa


import express from 'express'; // cài thư viện này để hỗ trợ routing cho Server
import cors from 'cors'; // cài cài này giúp trang web của client có thể truy cập domain của server này.
// vd: client gọi http://localhost:5000/users thì nó sẽ cho phép đi đến domain server  để lấy dữ liệu user

import posts from './routers/posts.js'; 
import users from './routers/users.js'; // cài routers user từ thư mục user. 
import cars from './routers/cars.js'; // cài routers cars từ thư mục cars. 
import contracts from './routers/contracts.js'; // cài routers contracts từ thư mục contracts. 
import detailscontracts from './routers/detailscontracts.js'; // cài detailscontracts user từ thư mục detailscontracts. 

import mongoose from 'mongoose'; // cài thư viện này giúp tạo model cho database


const app = express();
const PORT = process.env.PORT || 5000; // Port mặc định được lấy từ process.env.PORT, nếu không có thì lấy port mặc định là 5000

const URI = 'mongodb+srv://admin:99lC2CqWxNn5Lyka@cluster0.5vfcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// địa chỉ URI của database mongodb trên mongoose atlas

app.use(cors());
app.use(express.json({ limit: '100mb' })); // giới hạn kích thước phần body của 1 request.
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // urlencoded là một chức năngg giúp phân tích các cú pháp request đến với 
//JSON và dựa trên việc phân tích body => Ở đây set giới hạn mặc định cho body là 100MB 

app.use('/posts', posts); 
app.use('/users', users);// khai báo server sử dụng router users thì mới được có sử dụng được api của users để lấy hoặc tương tác dữ liệu. 
app.use('/cars', cars);
app.use('/contracts', contracts);
app.use('/detailscontracts', detailscontracts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
  // useNewUrlParser là connection string cũ kỹ, 
  //trong tương lai có thể mongodb ko hỗ trợ nữa nên phải set nó = true 
  
  // useUnifiedTopology là cấu trúc hợp nhất chuỗi connection string.

  // Nếu kết nối thành công thì thông báo đã kết nối db. Server sẽ sử dụng port mặc định (đã khai báo ở trên) + xuất thông báo sử dụng port
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });
  // Nếu kết nối thất bại thì sẽ catch lỗi rồi xuất lỗi ra.
