import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectToDB } from './db.js';
import { Product } from './models/Product.js';

config();

const port = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Working' });
});

app.get('/products', async (_req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
    s;
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (req.body.name) product.name = req.body.name;
    if (req.body.price) product.price = req.body.price;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/products', async (req, res) => {
  if (!req.body.name || !req.body.price)
    return res.status(400).json({ message: 'Name and price are required' });

  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  try {
    await Product.create(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  await Product.create(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, async () => {
  try {
    await connectToDB();
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Listen on port: ', port);
  } catch (error) {
    console.error(error.message);
  }
});
