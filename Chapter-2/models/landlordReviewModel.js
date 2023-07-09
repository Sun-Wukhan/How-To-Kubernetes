const mongoose = require('mongoose');

const landlordReviewSchema = mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Please add a content field']
    },
    lease_listing_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LeaseListing',
        required: [true, 'Please provide a lease listing ID']
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model('LandlordReview', landlordReviewSchema);