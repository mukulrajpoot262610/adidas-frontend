import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useDispatch } from 'react-redux'
import { AddAddress } from '../../services/api';
import { setAuth } from '../../redux/authSlice';
import toast from 'react-hot-toast';


const AddressModal = ({ setShowModal }) => {

    const dispatch = useDispatch()

    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [street, setStreet] = useState()
    const [landmark, setLandmark] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = { street, landmark, country, state: region, pincode, city }

        try {
            const { data } = await AddAddress(payload)
            dispatch(setAuth(data))
            setShowModal(false)
            toast.success('Added Successfully')
        } catch (err) {
            toast.error(err.response.data.msg)
            console.log(err)
        }
    }

    return (
        <div className='fixed z-50 backdrop-blur-sm bg-black/[.6] top-0 left-0 h-screen w-full flex justify-center items-center'>
            <div className='border border-black bg-white p-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl italic font-bold uppercase tracking-tighter'>Add New Address</h1>
                    <GrFormClose className='text-4xl cursor-pointer' onClick={() => setShowModal(false)} />
                </div>
                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                        <input type='text' className="w-full border outline-none  p-3" onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street Address Here..." />
                        <input type='text' onChange={(e) => setLandmark(e.target.value)} className="w-full border outline-none  p-3" placeholder="Enter Nearest Landmark Here..." />
                    </div>
                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                        <CountryDropdown
                            defaultOptionLabel="Select a country, man."
                            value={country}
                            className="w-full border outline-none  p-3"
                            onChange={(e) => setCountry(e)} />
                        <RegionDropdown
                            blankOptionLabel="No country selected, man."
                            defaultOptionLabel="Now select a region, pal."
                            country={country}
                            value={region}
                            className="w-full border outline-none  p-3"
                            onChange={(e) => setRegion(e)} />
                    </div>
                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                        <input type='text' className="w-full border outline-none  p-3" onChange={(e) => setCity(e.target.value)} placeholder="Enter City Here..." />
                        <input type='number' className="w-full border outline-none  p-3" onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode Here..." maxLength={6} />
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <button onClick={() => setShowModal(false)} className="font-bold border cursor-pointer border-black py-3 px-6 my-4 flex items-center uppercase">Cancel &nbsp; <HiArrowNarrowRight /></button>
                        <button type="submit" className="font-bold cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase">Add &nbsp; <HiArrowNarrowRight /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressModal