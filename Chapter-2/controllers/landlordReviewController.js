const asyncHandler = require('express-async-handler');
const LandlordReview = require('../models/landlordReviewModel')

// @desc    Get All LandlordReviews
// @route   GET '/api/landlordReviews'
// @acess   Private 
const getLandlordReviews = asyncHandler(async (req, res) => {
    const landlordReviews = await LandlordReview.find();

    res.status(200).json(landlordReviews);
});

// @desc    POST a LandlordReview
// @route   POST '/api/landlordReviews'
// @acess   Private
const postLandlordReview = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(404);
        throw new Error(req.body);
    };

    const landlordReview = await LandlordReview.create({
        content: req.body.content,
        lease_listing_id: req.body.lease_listing_id
    });
      
    res.status(201).json(landlordReview);
    
});

// @desc    Update a LandlordReview
// @route   PUT '/api/landlordReviews'
// @acess   Private 
const updateLandlordReview = asyncHandler(async (req, res) => {
    const landlordReview = await LandlordReview.findById(req.params.id);

    if(!landlordReview) {
        res.status(400); 
        throw new Error('LandlordReview not found')
    }

    const updatedLandlordReview = await LandlordReview.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json(updatedLandlordReview)
});

// @desc    DELETE All LandlordReviews
// @route   DELETE '/api/landlordReviews'
// @acess   Private 
const deleteLandlordReview = asyncHandler(async (req, res) => {
    const landlordReview = await LandlordReview.findByIdAndDelete(req.params.id)

    if(!landlordReview) {
        res.status(400); 
        throw new Error('LandlordReview not found.')
    }

    res.status(200).json({ message: `id: ${req.params.id}`
    })
});

module.exports = {
    getLandlordReviews,
    postLandlordReview, 
    updateLandlordReview, 
    deleteLandlordReview
};