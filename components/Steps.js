import moment from 'moment'
import React, { useEffect, useState } from 'react'

const Steps = ({ status }) => {

    const [active, setActive] = useState(1)

    useEffect(() => {
        if (status.status === 'Shipped') {
            setActive(1)
        } else if (status.status === 'Arriving Soon') {
            setActive(2)
        } else if (status.status === 'Delivered') {
            setActive(3)
        }
    }, [status])

    return (
        <section className="text-gray-600 body-font">
            <div className="">
                {
                    active >= 1 && <div className="flex relative pt-10 sm:items-start">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Order Shipped</h2>
                                <p className="leading-relaxed mb-4">{moment(status.time).fromNow()}</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    active >= 2 && <div className="flex relative sm:items-start">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Order is Arriving Soon</h2>
                                <p className="leading-relaxed mb-4">{moment(status.time).fromNow()}</p>
                            </div>
                        </div>
                    </div>

                }
                {
                    active >= 3 &&
                    <div className="flex relative sm:items-start">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Order is Completed</h2>
                                <p className="leading-relaxed mb-4">{moment(status.time).fromNow()}</p>
                            </div>
                        </div>
                    </div>
                }


            </div>
        </section>
    )
}

export default Steps