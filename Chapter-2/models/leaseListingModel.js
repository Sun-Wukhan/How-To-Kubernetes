const mongoose = require('mongoose');

const leaseListingSchema = mongoose.Schema({
    address: {
        type: String,
        required: [true, 'Please add a name']
    },
    rental_amount: {
        type: String,
        required: [true, 'Please add an email'],
    },
    description: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
    lease_start_date: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
    lease_end_date: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
    size: {
        type: Number,
        required: [true, 'Please add square footage sizd of the unit'],
    },
    ammenities: {
        type: String,
        required: [true, 'Please add square footage sizd of the unit'],
    },
    landlord_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Landlord',
        required: [true, 'Please provide a property ID'],
    },
    tenant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: [true, 'Please provide a property ID'],
    },
}, 
{
    timestamps: true
});

module.exports = mongoose.model('LeaseListing', leaseListingSchema);