import React from 'react';
import Search from '../../components/Search';
import NavbarUser from '../../components/NavbarUser';
type Props = {}

const HeaderMain = (props: Props) => {
    return (
        <div className="flex justify-between justify-items-center items-center">
            <div >
                <Search />
            </div>
            <div >
                <NavbarUser />
            </div>
        </div>
    )
}

export default HeaderMain