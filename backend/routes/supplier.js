const express = require('express')
const router = express.Router();


const {
    getAllSuppliers,
    getSupplierDetails,
    newSupplier,
    updateSupplier,
    deleteSupplier,
    

} = require('../controllers/supplierController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//router.route('/admin/suppliers').get(getAllSuppliers);
router.route('/admin/supplier/new').post(isAuthenticatedUser, authorizeRoles('admin'), newSupplier);

router.route('/admin/suppliers').get(isAuthenticatedUser, authorizeRoles('admin'), getAllSuppliers)

router.route('/admin/supplier/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getSupplierDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateSupplier)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteSupplier);


module.exports = router;