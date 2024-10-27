import express from 'express';
import { getProducts ,addProduct, deleteProduct} from '../../controllers/products';

const router = express.Router();

router.post('/', addProduct);

router.delete('/:title', deleteProduct);

router.get('/', getProducts);


export default router;