import * as productService from '../services/productService.js';

export const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json({
    success: true,
    data: products,
    message: 'Products retrieved successfully',
  });
};

export const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json({
    success: true,
    data: product,
    message: 'Product retrieved successfully',
  });
};

export const createProduct = async (req, res) => {
  const { name, price, category: categoryId } = req.body;
  const product = await productService.createProduct({ name, price, categoryId });
  res.status(201).json({
    success: true,
    data: product,
    message: 'Product created successfully',
  });
};

export const updateProduct = async (req, res) => {
  const { name, price, category: categoryId } = req.body;
  const updatedProduct = await productService.updateProduct(req.params.id, {
    name,
    price,
    categoryId,
  });
  res.json({
    success: true,
    data: updatedProduct,
    message: 'Product updated successfully',
  });
};

export const deleteProduct = async (req, res) => {
  const product = await productService.deleteProduct(req.params.id);
  res.json({
    success: true,
    data: product,
    message: 'Product deleted successfully',
  });
};
