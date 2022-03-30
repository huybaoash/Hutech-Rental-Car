import express from 'express';
import cors from 'cors';
import posts from './routers/posts.js';
import users from './routers/users.js';
import cars from './routers/cars.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://admin:99lC2CqWxNn5Lyka@cluster0.5vfcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

app.use('/posts', posts);
app.use('/users', users);
app.use('/cars', cars);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });
