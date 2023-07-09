const asyncHandler = require('express-async-handler');
const TenantReview = require('../models/tenantReviewModel')

// @desc    Get All TenantReviews
// @route   GET '/api/tenantReviews'
// @acess   Private 
const getTenantReviews = asyncHandler(async (req, res) => {
    const tenantReviews = await TenantReview.find();

    res.status(200).json(tenantReviews);
});

// @desc    POST a TenantReview
// @route   POST '/api/tenantReviews'
// @acess   Private
const postTenantReview = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(404);
        throw new Error(req.body);
    };

    const tenantReview = await TenantReview.create({
        content: req.body.content,
        lease_listing_id: req.body.lease_listing_id
    });
      
    res.status(201).json(tenantReview);
    
});

// @desc    Update a TenantReview
// @route   PUT '/api/tenantReviews'
// @acess   Private 
const updateTenantReview = asyncHandler(async (req, res) => {
    const tenantReview = await TenantReview.findById(req.params.id);

    if(!tenantReview) {
        res.status(400); 
        throw new Error('TenantReview not found')
    }

    const updatedTenantReview = await TenantReview.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json(updatedTenantReview)
});

// @desc    DELETE All TenantReviews
// @route   DELETE '/api/tenantReviews'
// @acess   Private 
const deleteTenantReview = asyncHandler(async (req, res) => {
    const tenantReview = await TenantReview.findByIdAndDelete(req.params.id)

    if(!tenantReview) {
        res.status(400); 
        throw new Error('TenantReview not found.')
    }

    res.status(200).json({ message: `id: ${req.params.id}`
    })
});

module.exports = {
    getTenantReviews,
    postTenantReview, 
    updateTenantReview, 
    deleteTenantReview
};