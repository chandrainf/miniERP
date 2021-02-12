const express = require('express')
const router = express.Router();


const {
    seeAlatBeratDetails,
    getAllAlatBerats,
    getAlatBeratDetails,
    newAlatBerat,
    updateAlatBerat,
    deleteAlatBerat,
    

} = require('../controllers/alatBeratController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//router.route('/admin/alatBerats').get(getAllAlatBerats);
router.route('/admin/alatBerat/new').post(isAuthenticatedUser, authorizeRoles('admin'), newAlatBerat);

router.route('/admin/alatBerats').get(isAuthenticatedUser, authorizeRoles('admin'), getAllAlatBerats)

//router.route('/admin/alatberats/:id').get(isAuthenticatedUser, authorizeRoles('admin'), seeAlatBeratDetails)

router.route('/admin/alatBerat/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAlatBeratDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateAlatBerat)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteAlatBerat);


module.exports = router;