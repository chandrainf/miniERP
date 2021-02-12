import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateSupplier, getSupplierDetails, clearErrors } from '../../actions/supplierActions'
import { UPDATE_SUPPLIER_RESET } from '../../constants/supplierConstants'

const UpdateSupplier = ({ match, history }) => {

    const [namaSupplier, setNamaSupplier] = useState('')
    const [alamat, setAlamat] = useState('')
    const [telepon1, setTelepon1] = useState('')
    const [telepon2, setTelepon2] = useState('')
    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.supplier);
    const { supplier } = useSelector(state => state.supplierDetails)
    //const { error, supplier } = useSelector(state => state.supplierDetails)
    //const { loading, error: updateError, isUpdated } = useSelector(state => state.supplier);

    const supplierId = match.params.id;

    useEffect(() => {

        if (supplier && supplier._id !== supplierId) {
            dispatch(getSupplierDetails(supplierId));
        } else {
            setNamaSupplier(supplier.namaSupplier);
            setTelepon1(supplier.telepon1);
            setTelepon2(supplier.telepon2);
            setEmail(supplier.email);
            setAlamat(supplier.alamat);
 
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        //if (updateError) {
          //  alert.error(updateError);
           // dispatch(clearErrors())
        //}


        if (isUpdated) {
            alert.success('Supplier updated successfully');
            history.push('/admin/suppliers');
            dispatch({ type: UPDATE_SUPPLIER_RESET })
        }

    }, [dispatch, alert, error, history, isUpdated, supplierId, supplier ])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('namaSupplier', namaSupplier);
        formData.set('telepon1', telepon1);
        formData.set('telepon2', telepon2);
        formData.set('email', email);
        formData.set('alamat', alamat);

        dispatch(updateSupplier(supplier._id, formData))
    }


    return (
        <Fragment>
            <MetaData title={'Update Supplier'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">

                        
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Update Supplier</h1>

                                <div className="form-group">
                                    <label htmlFor="namaSupplier_field">Nama Supplier</label>
                                    <input
                                        type="text"
                                        id="namaSupplier_field"
                                        className="form-control"
                                        value={namaSupplier}
                                        onChange={(e) => setNamaSupplier(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="telepon1_field">Telepon 1</label>
                                    <input
                                        type="text"
                                        id="telepon1_field"
                                        className="form-control"
                                        value={telepon1}
                                        onChange={(e) => setTelepon1(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="telepon2_field">Telepon 2</label>
                                    <input
                                        type="text"
                                        id="telepon2_field"
                                        className="form-control"
                                        value={telepon2}
                                        onChange={(e) => setTelepon2(e.target.value)}
                                    />
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="text"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
  

                                <div className="form-group">
                                    <label htmlFor="alamat_field">Alamat</label>
                                    <textarea className="form-control" id="alamat_field" rows="8" value={alamat} onChange={(e) => setAlamat(e.target.value)}></textarea>
                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3" 
                                >
                                    UPDATE
                            </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default UpdateSupplier

//<div className="wrapper my-5">
