import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allSuppliers, deleteSupplier, clearErrors } from '../../actions/supplierActions'
import { DELETE_SUPPLIER_RESET } from '../../constants/supplierConstants'

const SuppliersList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, suppliers } = useSelector(state => state.allSuppliers);
    const { isDeleted } = useSelector(state => state.supplier)

    useEffect(() => {
        dispatch(allSuppliers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Supplier deleted successfully');
            history.push('/admin/suppliers');
            dispatch({ type: DELETE_SUPPLIER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])


    const setSuppliers = () => {
        const data = {
            columns: [
                {
                    label: 'Supplier ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Nama Supplier',
                    field: 'namaSupplier',
                    sort: 'asc'
                },
                {
                    label: 'Telepon 1',
                    field: 'telepon1',
                    sort: 'asc'
                },
                {
                    label: 'Telepon 2',
                    field: 'telepon2',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Alamat',
                    field: 'alamat',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        suppliers.forEach(supplier => {
            data.rows.push({
                id: supplier._id,
                namaSupplier: supplier.namaSupplier,
                telepon1: supplier.telepon1,
                telepon2: supplier.telepon2,
                email: supplier.email,
                alamat: supplier.alamat,

                actions: <Fragment>
                    <Link to={`/admin/supplier/${supplier._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" 
                    onClick={() => {if(window.confirm('Apakah Anda Yakin ingin menghapus item ini?')){deleteSupplierHandler(supplier._id)};}}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deleteSupplierHandler = (id) => {
        dispatch(deleteSupplier(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Suppliers'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">List Supplier</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setSuppliers()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default SuppliersList
