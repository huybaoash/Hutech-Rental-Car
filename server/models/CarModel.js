import mongoose from 'mongoose'; // cài thư viện mongoose cho model này để tương tác dữ liệu với database thông qua Schema

const schema = new mongoose.Schema(
  {
    carname: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    pricerent: {
      type: String,
      required: true,
    },
    cartype: {
        type: String,
        required: true,
        default: 'Anonymous',
      },
    carcompany: {
        type: String,
        required: true,
        default: 'Anonymous',
      },
    image: {
      type: String,
      
      
    },
    

  },
  { timestamps: true } // khai báo cái này đồng nghĩ việc thêm 2 thuộc tính: CreateAt và UpdateAt.
);

export const CarModel = mongoose.model('Cars', schema);
// Khai báo dòng này mới có thể mang model ra ngoài để sử dụng.
// Đồng thời, khi tương tác dữ liệu sẽ được lưu vào table Cars trên database.