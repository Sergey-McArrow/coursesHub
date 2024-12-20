import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import * as productController from '../controllers/productController.js';

const router = Router();

router.get('/', asyncHandler(productController.getAllProducts));
router.get('/:id', asyncHandler(productController.getProductById));
router.post('/', asyncHandler(productController.createProduct));
router.put('/:id', asyncHandler(productController.updateProduct));
router.delete('/:id', asyncHandler(productController.deleteProduct));

export default router;
