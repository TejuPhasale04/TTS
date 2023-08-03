const express = require('express');
const BOM = require('../BOMDB');

const adminrouter = express.Router();

// Render the admin form
adminrouter.get('/admin', (req, res) => {
  res.render('admin');
});

// Handle form submission
adminrouter.post('/admin', async (req, res) => {
 
    // Redirect back to the admin form
    res.redirect('/admin');

});

module.exports = adminrouter;
