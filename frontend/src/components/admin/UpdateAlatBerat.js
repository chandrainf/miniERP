import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateAlatBerat, getAlatBeratDetails, clearErrors } from '../../actions/alatBeratActions'
import { UPDATE_ALAT_BERAT_RESET } from '../../constants/alatBeratConstants'

const UpdateAlatBerat = ({ match, history }) => {

    const [kodeAlat, setKodeAlat] = useState('');
    const [namaAlat, setNamaAlat] = useState('');
    const [merk, setMerk] = useState('');
    const [model, setModel] = useState('');
    const [kapasitas, setKapasitas] = useState('');
    const [nomorRangka, setNomorRangka] = useState('');
    const [nomorMesin, setNomorMesin] = useState('');
    const [nomorPlat, setNomorPlat] = useState('');
    const [tahunPembuatan, setTahunPembuatan] = useState('');
    const [tahunRegistrasi, setTahunRegistrasi] = useState('');
    const [status, setStatus] = useState('');
    const [kepemilikan, setKepemilikan] = useState('');

    const statuss = [
        'BEKERJA',
        'STANDBY',
        'RUSAK',
        'MAINTENANCE',
        'PERBAIKAN'
    ]

    const kepemilikans = [
        'Perusahaan',
        'Rental'
    ]
    const [SIA, setSIA] = useState('');
    const [STNK, setSTNK] = useState('');
    const [Pajak, setPajak] = useState('');
    const [KIR, setKIR] = useState('');
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const alert = useAlert();
    const dispatch = useDispatch();
    

    //const { error, isUpdated } = useSelector(state => state.alatBerat);
    //const { alatBerat } = useSelector(state => state.alatBeratDetails)
    const { error, alatBerat } = useSelector(state => state.alatBeratDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.alatBerat);

    const alatBeratId = match.params.id;

    useEffect(() => {

        if (alatBerat && alatBerat._id !== alatBeratId) {
            dispatch(getAlatBeratDetails(alatBeratId));
        } else {
            setKodeAlat(alatBerat.kodeAlat);
            setNamaAlat(alatBerat.namaAlat);
            setMerk(alatBerat.merk);
            setModel(alatBerat.model);
            setKapasitas(alatBerat.kapasitas);
            setNomorRangka(alatBerat.nomorRangka);
            setNomorMesin(alatBerat.nomorMesin);
            setNomorPlat(alatBerat.nomorPlat);
            setTahunPembuatan(alatBerat.tahunPembuatan);
            setTahunRegistrasi(alatBerat.tahunRegistrasi);
            setStatus(alatBerat.status);
            setKepemilikan(alatBerat.kepemilikan);
            setSIA(alatBerat.SIA);
            setSTNK(alatBerat.STNK);
            setPajak(alatBerat.Pajak);
            setKIR(alatBerat.KIR);
            setOldImages(alatBerat.images);
 
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }


        if (isUpdated) {
            history.push('/admin/alatBerats');
            alert.success('Alat Berat updated successfully');
            dispatch({ type: UPDATE_ALAT_BERAT_RESET })
        }

    }, [dispatch, alert, error, history, updateError, isUpdated, alatBeratId, alatBerat ])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('kodeAlat', kodeAlat);
        formData.set('namaAlat', namaAlat);
        formData.set('merk', merk);
        formData.set('model', model);
        formData.set('kapasitas', kapasitas);
        formData.set('nomorRangka', nomorRangka);
        formData.set('nomorMesin', nomorMesin);
        formData.set('nomorPlat', nomorPlat);
        formData.set('tahunPembuatan', tahunPembuatan);
        formData.set('tahunRegistrasi', tahunRegistrasi);
        formData.set('status', status);
        formData.set('kepemilikan', kepemilikan);
        formData.set('SIA', SIA);
        formData.set('STNK', STNK);
        formData.set('Pajak', Pajak);
        formData.set('KIR', KIR);
    

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(updateAlatBerat(alatBerat._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }


    return (
        <Fragment>
            <MetaData title={'Update AlatBerat'} />
            <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">

                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Update Alat Baru</h1>

                                <div className="form-group">
                                    <label htmlFor="kodeAlat_field">Kode Alat Berat</label>
                                    <input
                                        type="text"
                                        id="kodeAlat_field"
                                        className="form-control"
                                        value={kodeAlat}
                                        onChange={(e) => setKodeAlat(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="namaAlat_field">Nama Alat Berat</label>
                                    <input
                                        type="text"
                                        id="namaAlat_field"
                                        className="form-control"
                                        value={namaAlat}
                                        onChange={(e) => setNamaAlat(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="merk_field">Merk</label>
                                    <input
                                        type="text"
                                        id="merk_field"
                                        className="form-control"
                                        value={merk}
                                        onChange={(e) => setMerk(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="model_field">Model</label>
                                    <input
                                        type="text"
                                        id="model_field"
                                        className="form-control"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="kapasitas_field">Kapasitas</label>
                                    <input
                                        type="text"
                                        id="kapasitas_field"
                                        className="form-control"
                                        value={kapasitas}
                                        onChange={(e) => setKapasitas(e.target.value)}
                                    />
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="nomorRangka_field">Nomor Rangka</label>
                                    <input
                                        type="text"
                                        id="nomorRangka_field"
                                        className="form-control"
                                        value={nomorRangka}
                                        onChange={(e) => setNomorRangka(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="nomorMesin_field">Nomor Mesin</label>
                                    <input
                                        type="text"
                                        id="nomorMesin_field"
                                        className="form-control"
                                        value={nomorMesin}
                                        onChange={(e) => setNomorMesin(e.target.value)}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="nomorPlat_field">Nomor Plat</label>
                                    <input
                                        type="text"
                                        id="nomorPlat_field"
                                        className="form-control"
                                        value={nomorPlat}
                                        onChange={(e) => setNomorPlat(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tahunPembuatan_field">Tahun Pembuatan</label>
                                    <input
                                        type="text"
                                        id="tahunPembuatan_field"
                                        className="form-control"
                                        value={tahunPembuatan}
                                        onChange={(e) => setTahunPembuatan(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tahunRegistrasi_field">Tahun Registrasi</label>
                                    <input
                                        type="text"
                                        id="tahunRegistrasi_field"
                                        className="form-control"
                                        value={tahunRegistrasi}
                                        onChange={(e) => setTahunRegistrasi(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="status_field">Status</label>
                                    <select className="form-control" id="status_field" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        {statuss.map(status => (
                                            <option key={status} value={status} >{status}</option>
                                        ))}

                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="kepemilikan_field">Kepemilikan</label>
                                    <select className="form-control" id="kepemilikan_field" value={kepemilikan} onChange={(e) => setKepemilikan(e.target.value)}>
                                        {kepemilikans.map(kepemilikan => (
                                            <option key={kepemilikan} value={kepemilikan} >{kepemilikan}</option>
                                        ))}

                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="SIA_field">SIA</label>
                                    <input
                                        type="date"
                                        id="SIA_field"
                                        className="form-control"
                                        value={SIA}
                                        onChange={(e) => setSIA(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Pajak_field">Pajak</label>
                                    <input
                                        type="date"
                                        id="Pajak_field"
                                        className="form-control"
                                        value={Pajak}
                                        onChange={(e) => setPajak(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="STNK_field">STNK</label>
                                    <input
                                        type="date"
                                        id="STNK_field"
                                        className="form-control"
                                        value={STNK}
                                        onChange={(e) => setSTNK(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="KIR_field">KIR</label>
                                    <input
                                        type="date"
                                        id="KIR_field"
                                        className="form-control"
                                        value={KIR}
                                        onChange={(e) => setKIR(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="KIR_field">KIR</label>
                                    <input
                                        type="date"
                                        id="KIR_field"
                                        className="form-control"
                                        value={KIR}
                                        onChange={(e) => setKIR(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='alatBerat_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                 </label>
                                 </div>

                                    {oldImages && oldImages.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
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


export default UpdateAlatBerat

//<div className="wrapper my-5">
