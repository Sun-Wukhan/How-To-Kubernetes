// Dependencies
const express = require('express'); 
const router = express.Router(); 

// Methods
const { getLandlordReviews, postLandlordReview, updateLandlordReview, deleteLandlordReview  } = require('../controllers/landlordReviewController');

// Routes
router.route('/').get(getLandlordReviews).post(postLandlordReview);
router.route('/:id').delete(deleteLandlordReview).put(updateLandlordReview);

// Exports
module.exports = router; 