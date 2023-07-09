// Dependencies
const express = require('express'); 
const router = express.Router(); 

// Methods
const { getLandlords, postLandlord, updateLandlord, deleteLandlord  } = require('../controllers/landlordController');

// Routes
router.route('/').get(getLandlords).post(postLandlord);
router.route('/:id').delete(deleteLandlord).put(updateLandlord);

// Exports
module.exports = router; 