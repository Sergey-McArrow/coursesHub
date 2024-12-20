import Product from '../models/Product.js';
import Category from '../models/Category.js';

let defaultCategoryId;

export const initializeDefaultCategory = async () => {
  const defaultCategory = await Category.findOneAndUpdate(
    { name: 'Uncategorized' },
    { name: 'Uncategorized' },
    { upsert: true, new: true }
  );
  defaultCategoryId = defaultCategory._id;
  return defaultCategory;
};

export const getAllProducts = async () => {
  return Product.find().populate('category');
};

export const getProductById = async (id) => {
  const product = await Product.findById(id).populate('category');
  if (!product) {
    const error = new Error('Product not found');
    error.status = 404;
    throw error;
  }
  return product;
};

export const createProduct = async ({ name, price, categoryId }) => {
  if (!name || !price) {
    const error = new Error('Name and price are required');
    error.status = 400;
    throw error;
  }

  const finalCategoryId = categoryId || defaultCategoryId;
  if (categoryId) {
    const categoryExists = await Category.findById(finalCategoryId);
    if (!categoryExists) {
      const error = new Error('Invalid category ID');
      error.status = 400;
      throw error;
    }
  }

  const newProduct = await Product.create({
    name,
    price,
    category: finalCategoryId,
  });

  return newProduct.populate('category');
};

export const updateProduct = async (id, { name, price, categoryId }) => {
  const product = await Product.findById(id);
  if (!product) {
    const error = new Error('Product not found');
    error.status = 404;
    throw error;
  }

  if (name) product.name = name;
  if (price) product.price = price;
  if (categoryId) {
    const category = await Category.findById(categoryId);
    if (!category) {
      const error = new Error('Invalid category ID');
      error.status = 400;
      throw error;
    }
    product.category = category._id;
  }

  await product.save();
  return product.populate('category');
};

export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    const error = new Error('Product not found');
    error.status = 404;
    throw error;
  }
  return product;
};
