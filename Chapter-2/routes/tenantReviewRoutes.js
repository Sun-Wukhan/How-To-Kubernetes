// Dependencies
const express = require('express'); 
const router = express.Router(); 

// Methods
const { getTenantReviews, postTenantReview, updateTenantReview, deleteTenantReview  } = require('../controllers/tenantReviewController');

// Routes
router.route('/').get(getTenantReviews).post(postTenantReview);
router.route('/:id').delete(deleteTenantReview).put(updateTenantReview);

// Exports
module.exports = router; 