const asyncHandler = require('express-async-handler');
const Landlord = require('../models/landlordModel')

// @desc    Get All Landlords
// @route   GET '/api/landlords'
// @acess   Private 
const getLandlords = asyncHandler(async (req, res) => {
    const landlords = await Landlord.find();

    res.status(200).json(landlords);
});

// @desc    POST a Landlord
// @route   POST '/api/landlords'
// @acess   Private
const postLandlord = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(404);
        throw new Error(req.body);
    };

    const landlord = await Landlord.create({
        name: req.body.name,
        email: req.body.email, 
        phone: req.body.phone, 
    });
      
    res.status(201).json(landlord);
    
});

// @desc    Update a Landlord
// @route   PUT '/api/landlords'
// @acess   Private 
const updateLandlord = asyncHandler(async (req, res) => {
    const landlord = await Landlord.findById(req.params.id);

    if(!landlord) {
        res.status(400); 
        throw new Error('Landlord not found')
    }

    const updatedLandlord = await Landlord.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json(updatedLandlord)
});

// @desc    DELETE All Landlords
// @route   DELETE '/api/landlords'
// @acess   Private 
const deleteLandlord = asyncHandler(async (req, res) => {
    const landlord = await Landlord.findByIdAndDelete(req.params.id)

    if(!landlord) {
        res.status(400); 
        throw new Error('Landlord not found.')
    }

    res.status(200).json({ message: `id: ${req.params.id}`
    })
});

module.exports = {
    getLandlords, 
    postLandlord, 
    updateLandlord, 
    deleteLandlord
};