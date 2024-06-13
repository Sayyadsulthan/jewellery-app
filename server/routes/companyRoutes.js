import express from 'express';
import multer from 'multer';
import {
    getAllCompanies,
    createCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,
    searchCompanies,
    uploadCompanies,
} from '../controllers/companyController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// CRUD operations
router.get('/', auth, getAllCompanies);
router.post('/', auth, createCompany);
router.get('/:id', auth, getCompanyById);
router.put('/:id', auth, updateCompany);
router.delete('/:id', auth, deleteCompany);

// Full-text search
router.get('/search', auth, searchCompanies);

// Bulk upload
router.post('/upload', auth, upload.single('file'), uploadCompanies);

export default router;
