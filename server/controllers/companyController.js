import Company from '../models/Company.js';
import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createCompany = async (req, res) => {
    const company = new Company(req.body);
    try {
        const newCompany = await company.save();
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json({ message: 'Company deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const searchCompanies = async (req, res) => {
    try {
        const { q } = req.query;
        const companies = await Company.find({ $text: { $search: q } });
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const uploadCompanies = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // if file sent from front end the try to add it in db and server
    try {
        const workbook = XLSX.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        const processedData = data.map((company) => ({
            name: company['Name'],
            address: company['Address'],
            phone: company['Phone'],
            email: company['Email'],
        }));

        await Company.insertMany(processedData);
        res.status(200).send('Data successfully uploaded.');
    } catch (err) {
        res.status(500).send(`Error uploading data: ${err.message}`);
    }
};
