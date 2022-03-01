import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import { UpdateDetails } from '../../services/api'

const UserDetailsModal = ({ setShowModal }) => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [name, setName] = useState(user.name)
    const [genderSelect, setGenderSelect] = useState(user.gender)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await UpdateDetails({ name, gender: genderSelect })
            dispatch(setAuth(data))
            toast.success('Updated Successfully')
            setShowModal(false)
        } catch (err) {
            console.log(err)
            toast.error('Error Occured')
        }
    }
    return (
        <div className='fixed z-50 backdrop-blur-sm bg-black/[.6] top-0 left-0 h-screen w-full flex justify-center items-center'>
            <div className="flex justify-between lg:w-96 items-center mt-6 border p-6 bg-white">
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className="uppercase font-bold text-xl mb-3 mt-5">Enter your name</h1>
                    <input type='text' value={name} className="w-full border outline-none p-3 px-5" onChange={(e) => setName(e.target.value)} placeholder="Name" />

                    <div className='flex gap-4 justify-end'>
                        <button onClick={() => setShowModal(false)} className="font-bold border cursor-pointer border-black py-3 px-6 my-4 flex items-center uppercase">Cancel &nbsp; <HiArrowNarrowRight /></button>
                        <button type="submit" className="font-bold cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase">Save &nbsp; <HiArrowNarrowRight /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserDetailsModal