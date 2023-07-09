const mongoose = require('mongoose');

const tenantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Tenant', tenantSchema);