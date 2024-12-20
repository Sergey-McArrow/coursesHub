import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectToDB } from './db.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import productRoutes from './src/routes/productRoutes.js';
import { initializeDefaultCategory } from './src/services/productService.js';

config();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working' });
});

app.use('/products', productRoutes);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectToDB();
    console.log('✅ Database connected successfully');

    await initializeDefaultCategory();
    console.log('✅ Default category initialized');

    app.listen(port, () => {
      console.log(`✅ Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error('❌ Server startup error:', error.message);
    process.exit(1);
  }
};

startServer();
