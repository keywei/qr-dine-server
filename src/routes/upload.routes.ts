import { Router } from 'express';
import { UploadController } from '../controllers/upload.controller';
import { authenticateJwt } from '../middlewares/auth';
import { upload } from '../middlewares/upload';

const router = Router();

router.post('/', authenticateJwt, upload.single('image'), UploadController.uploadImage);

export default router;
