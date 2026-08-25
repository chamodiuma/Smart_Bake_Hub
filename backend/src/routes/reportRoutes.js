const express = require('express');
const router = express.Router();
const { 
    getSalesReport,
    getPaymentReport,
    getInventoryReport,
    getBookingReport,
    getFoodWasteReport
} = require('../controllers/reportController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

router.get('/sales', verifyToken, isAdmin, getSalesReport);
router.get('/payments', verifyToken, isAdmin, getPaymentReport);
router.get('/inventory', verifyToken, isAdmin, getInventoryReport);
router.get('/bookings', verifyToken, isAdmin, getBookingReport);
router.get('/waste', verifyToken, isAdmin, getFoodWasteReport);

module.exports = router;
