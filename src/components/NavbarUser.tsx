import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NavbarUser = (props: Props) => {
    return (
        <div className="flex items-center">
            <div className="">
                <button type="button" className="text-slate-300 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 
            ">
                    <Link to='signup' className="text-slate-300 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 
            ">Signup</Link>
                </button>
            </div>
            <div className="">
                <Link to='login' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
            </div>
        </div>
    )
}

export default NavbarUser