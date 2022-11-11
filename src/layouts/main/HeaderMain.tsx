import React from 'react';
import Search from '../../components/Search';
import NavbarUser from '../../components/NavbarUser';
type Props = {}

const HeaderMain = (props: Props) => {
    return (
        <div className="z-0 w-full fixed left-200 top-0 right-0 bg-[#001529]" style={{ paddingLeft: 200 }}>
            <div className='flex justify-between justify-items-center items-center px-8'>
                <div >
                    <Search />
                </div>
                <div >
                    <NavbarUser />
                </div>
            </div>
        </div>
    )
}

export default HeaderMain