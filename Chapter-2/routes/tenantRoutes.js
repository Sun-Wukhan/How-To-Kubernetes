// Dependencies
const express = require('express'); 
const router = express.Router(); 

// Methods
const { getTenants, postTenant, updateTenant, deleteTenant  } = require('../controllers/tenantController');

// Routes
router.route('/').get(getTenants).post(postTenant);
router.route('/:id').delete(deleteTenant).put(updateTenant);

// Exports
module.exports = router; 