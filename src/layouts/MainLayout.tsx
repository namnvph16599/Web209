import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div className="container">
            <header>header</header>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default MainLayout