import Image from 'next/image'
import React from 'react'
import { FaGithub, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src="/logo.svg" height={80} width={80} alt='' className='cursor-pointer' />
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 adidas —
                    <a href="https://github.com/mukulrajpoot262610" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@mukulrajpoot262610</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href='https://www.linkedin.com/in/mukul-rajpoot-262610/' target="_blank" rel='noreferrer' className="ml-3 text-gray-500">
                        <FaLinkedinIn className='text-xl' />
                    </a>
                    <a href='https://github.com/mukulrajpoot262610' target="_blank" rel='noreferrer' className="ml-3 text-gray-500">
                        <FaGithub className='text-xl' />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
