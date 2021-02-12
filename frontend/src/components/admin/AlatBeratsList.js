import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allAlatBerats, deleteAlatBerat, clearErrors } from '../../actions/alatBeratActions'
import { DELETE_ALAT_BERAT_RESET } from '../../constants/alatBeratConstants'

const AlatBeratsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, alatBerats } = useSelector(state => state.allAlatBerats);
    const { isDeleted } = useSelector(state => state.alatBerat)

    useEffect(() => {
        dispatch(allAlatBerats());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('AlatBerat deleted successfully');
            history.push('/admin/alatBerats');
            dispatch({ type: DELETE_ALAT_BERAT_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])


    const setAlatBerats = () => {
        const data = {
            columns: [
                {
                    label: 'ID Alat Berat ',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Kode Alat Berat',
                    field: 'kodeAlat',
                    sort: 'asc'
                },
                {
                    label: 'Nama Alat Berat',
                    field: 'namaAlat',
                    sort: 'asc'
                },
                {
                    label: 'Merk',
                    field: 'merk',
                    sort: 'asc'
                },
                {
                    label: 'Kapasitas',
                    field: 'kapasitas',
                    sort: 'asc'
                },
                {
                    label: 'Nomor Plat',
                    field: 'nomorPlat',
                    sort: 'asc'
                },
                {
                    label: 'Tahun Pembuatan',
                    field: 'tahunPembuatan',
                    sort: 'asc'
                },
                {
                    label: 'SIA',
                    field: 'SIA',
                    sort: 'asc'
                },
                {
                    label: 'STNK',
                    field: 'STNK',
                    sort: 'asc'
                },
                {
                    label: 'Pajak',
                    field: 'pajak',
                    sort: 'asc'
                },
                {
                    label: 'KIR',
                    field: 'KIR',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        alatBerats.forEach(alatBerat => {
            data.rows.push({
                
                id: alatBerat._id,
                kodeAlat: alatBerat.kodeAlat,
                namaAlat: alatBerat.namaAlat,
                merk: alatBerat.merk,
                kapasitas: alatBerat.kapasitas,
                nomorPlat: alatBerat.nomorPlat,
                tahunPembuatan: alatBerat.tahunPembuatan,
                SIA: alatBerat.SIA,
                STNK: alatBerat.STNK,
                pajak: alatBerat.pajak,
                KIR: alatBerat.KIR,

                actions: <Fragment>
                    <Link to={`/admin/alatBerats/${alatBerat._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link>
                    <Link to={`/admin/alatBerat/${alatBerat._id}`} className="btn btn-primary py-1 px-2 ml-2" >
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteAlatBeratHandler(alatBerat._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deleteAlatBeratHandler = (id) => {
        dispatch(deleteAlatBerat(id))
    }

    return (
        <Fragment>
            <MetaData title={'All AlatBerats'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">List Alat Berat</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setAlatBerats()}
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

export default AlatBeratsList
