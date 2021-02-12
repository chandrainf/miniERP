/*
import React, { Fragment, useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { seeAlatBeratDetails, clearErrors } from '../../actions/alatBeratActions'
//import { SEE_ALAT_BERAT_RESET } from '../../constants/alatBeratConstants'

const AlatBeratDetails = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, alatBerat = {} } = useSelector(state => state.alatBeratDetails)
    //const { AlatBeratDetails} = order

    const alatBeratId = match.params.id;

    useEffect(() => {
        dispatch(seeAlatBeratDetails(alatBeratId))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, alatBeratId])


    return (
        <Fragment>
            <MetaData title={`Detail Alat Berat # ${alatBerat && alatBerat._id}`} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        {loading ? <Loader /> : (
                            <div className="row d-flex justify-content-around">
                                <div className="col-12 col-lg-7 order-details">

                                    <h2 className="my-5">AlatBerat # {alatBerat._id}</h2>

                                    <h4 className="mb-4">Info Alat Berat</h4>
            
                                    <p className="mb-4"><b>Kode Alat:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Nama Alat:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Merk:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Model:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>kapasitas:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Nomor Rangka:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Nomor Mesin:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Nomor Plat:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Tahun Pembuatan:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Tahun Registrasi:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Status:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Kepemiikan:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>SIA:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>STNK:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>Pajak:</b>{alatBerat}</p>
                                    <p className="mb-4"><b>KIR:</b>{alatBerat}</p>

                            </div>
                        </div>
                        )}
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default AlatBeratDetails

*/
