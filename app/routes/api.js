'use strict';

var router = require('express').Router()
var AquaponicController = require('../controllers/aquaponicController');
var WastebinController = require('../controllers/wastebinController');

var APIRoutes = function() {
    console.log('routes')

    // Aquaponic Route
    router.post('/aquaponic/data', AquaponicController.postData)

    // Wastebin Route
    router.post('/wastebin/data', WastebinController.postData)

    return router
}

module.exports = APIRoutes;