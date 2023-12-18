'use client'

import Logo from "./Logo"
import SizebarRoutes from "./Sidebar-Routes"

const Sidebar = () =>{
    return (
        <div className="h-full border-r flex flex-col bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SizebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar