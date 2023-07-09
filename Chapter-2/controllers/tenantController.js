const asyncHandler = require('express-async-handler');
const Tenant = require('../models/tenantModel')

// @desc    Get All Tenants
// @route   GET '/api/tenants'
// @acess   Private 
const getTenants = asyncHandler(async (req, res) => {
    const tenants = await Tenant.find();

    res.status(200).json(tenants);
});

// @desc    POST a Tenant
// @route   POST '/api/tenant'
// @acess   Private
const postTenant = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(404);
        throw new Error(res.body.message);
    };

    const tenant = await Tenant.create({
        name: req.body.name,
        email: req.body.email, 
        phone: req.body.phone, 
    });
      
    res.status(201).json(tenant);
    
});

// @desc    Update a Tenant
// @route   PUT '/api/tenant'
// @acess   Private 
const updateTenant = asyncHandler(async (req, res) => {
    const tenant = await Tenant.findById(req.params.id);

    if(!tenant) {
        res.status(400); 
        throw new Error('Tenant not found')
    }

    const updatedTenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(201).json(updatedTenant)
});

// @desc    DELETE All Tenant
// @route   DELETE '/api/tenant'
// @acess   Private 
const deleteTenant = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete a Tenant: ${req.params.id}`
    })
});

module.exports = {
    getTenants, 
    postTenant, 
    updateTenant, 
    deleteTenant
};