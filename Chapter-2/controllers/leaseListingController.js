const asyncHandler = require('express-async-handler');
const LeaseListing = require('../models/leaseListingModel')

// @desc    Get All LeaseListings
// @route   GET '/api/leaseListings'
// @acess   Private 
const getLeaseListings = asyncHandler(async (req, res) => {
    const leaseListings = await LeaseListing.find();

    res.status(200).json(leaseListings);
});

// @desc    POST a LeaseListing
// @route   POST '/api/leaseListings'
// @acess   Private
const postLeaseListing = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(404);
        throw new Error(req.body);
    };

    const leaseListing = await LeaseListing.create({
        address: req.body.address,
        rental_amount: req.body.rental_amount, 
        description: req.body.description, 
        lease_start_date: req.body.lease_start_date,
        lease_end_date: req.body.lease_end_date,
        size: req.body.size,
        ammenities: req.body.ammenities,
        landlord_id: req.body.landlord_id,
        tenant_id: req.body.tenant_id
    });
      
    res.status(201).json(leaseListing);
    
});

// @desc    Update a LeaseListing
// @route   PUT '/api/leaseListings'
// @acess   Private 
const updateLeaseListing = asyncHandler(async (req, res) => {
    const leaseListing = await LeaseListing.findById(req.params.id);

    if(!leaseListing) {
        res.status(400); 
        throw new Error('LeaseListing not found')
    }

    const updatedLeaseListing = await LeaseListing.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json(updatedLeaseListing)
});

// @desc    DELETE All LeaseListings
// @route   DELETE '/api/leaseListings'
// @acess   Private 
const deleteLeaseListing = asyncHandler(async (req, res) => {
    const leaseListing = await LeaseListing.findByIdAndDelete(req.params.id)

    if(!leaseListing) {
        res.status(400); 
        throw new Error('LeaseListing not found.')
    }

    res.status(200).json({ message: `id: ${req.params.id}`
    })
});

module.exports = {
    getLeaseListings,
    postLeaseListing, 
    updateLeaseListing, 
    deleteLeaseListing
};