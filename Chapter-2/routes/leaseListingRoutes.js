// Dependencies
const express = require('express'); 
const router = express.Router(); 

// Methods
const { getLeaseListings, postLeaseListing, updateLeaseListing, deleteLeaseListing  } = require('../controllers/leaseListingController');

// Routes
router.route('/').get(getLeaseListings).post(postLeaseListing);
router.route('/:id').delete(deleteLeaseListing).put(updateLeaseListing);

// Exports
module.exports = router; 