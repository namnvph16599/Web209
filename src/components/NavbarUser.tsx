import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MenuProps, Space } from 'antd';
import { Dropdown } from 'antd';
import { getAuth, signOut } from "firebase/auth";
import { saveUser } from '../slices/auth';

type Props = {}

const NavbarUser = (props: Props) => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const auth = getAuth()
    const logout = () => {
        signOut(auth).then(() => {
            dispatch(saveUser({ logged: false }));
        }).catch((error) => {
            console.log('error', error);
        });
    }
    if (user.logged) {
        const items: MenuProps['items'] = [
        ];
        return <Dropdown className="relative" menu={{ items }} dropdownRender={menu => (
            <div className="dropdown-content absolute top-[-30px] right-0">
                <div className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="py-3 px-4">
                        <span className="block text-sm text-gray-900 dark:text-white">{user.displayName}</span>
                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                    </div>
                    <ul className="py-1" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <Link onClick={logout} to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )} trigger={['click']}>
            <Space className='relative'>
                <button type="button" className=" text-sm rounded-full dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <img className="w-10 h-10 mt-4 rounded-full" src={user.photoURL} alt="user photo" />
                </button>
            </Space>
        </Dropdown>
    }

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