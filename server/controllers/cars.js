import { CarModel } from '../models/CarModel.js'; // Nhận model Car từ thu mục models

export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find(); // chờ tới khi tìm được hết danh sách car.
    res.status(200).json(cars); // nếu kết quả tìm dc thành công thì trả về trạng thái 200 cùng tập tin danh sách car
  } catch (err) { // nếu có lỗi sự cố gì thì catch lại và xuất thông tin lỗi vào kết quả trả về.
    res.status(500).json({ error: err });
  }
};

export const createCar = async (req, res) => {
  try {
    const newcar = req.body; // phần body của 1 request là dạng { "xe": "Honda" }, cũng có nghĩa đây là dữ liệu của xe mới.

    const car = new CarModel(newcar); // gọi biến car tham chiếu trên Car Model để chứa dữ liệu newcar.

    

    await car.save(); // Lưu vào database

    res.status(200).json(car); // Nếu kết quả thêm dữ liệu thành công thì trả về trạng thái 200 cùng dữ liệu car mới tạo.
  } catch (err) {
    res.status(500).json({ error: err });// nếu có lỗi sự cố gì thì catch lại và xuất thông tin lỗi vào kết quả trả về.
  }
};

export const updateCar = async (req, res) => {
  try {
    const updateCar = req.body; // dữ liệu xe cần update
    const car = await CarModel.findOneAndUpdate( // Chờ đợi server tìm được dữ liệu dựa trên _id car
      { _id: updateCar._id },
      updateCar, // sau khi tìm được car thì thay đổi dữ liệu đó với cái mà ta muốn. 
      { new: true } // khi tìm được và thay đổi thì nó vẫn sẽ trả result về dữ liệu trước khi thay đổi (THẬT SỰ LÀ NÓ ĐÃ DC THAY ĐỔI TRONG DATABASE RỒI)
                    // ta gọi new: true để biến car chứa dữ liệu mới chứ không phải dữ liệu cũ nữa.
    );
    console.log('[car]',car);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



export const removeCar = async (req, res) => {
  try {
    const updateCar = req.body;

    const car = await CarModel.findByIdAndDelete(
      { _id: updateCar._id } // tìm và xóa dữ liệu dựa trên _id của car
      
    );
    console.log('[car]',car);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

