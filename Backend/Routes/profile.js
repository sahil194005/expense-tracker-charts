const express = require('express');
const router = express.Router();
const AuthUser = require('../Auth/AuthUser')
const {profileComplete,getProfile} = require('../Controller/Users')

router.route('/update').post(AuthUser, profileComplete);
router.route('/getProfile').get(AuthUser, getProfile);

module.exports = router;
