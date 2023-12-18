'use client'

import MobileSidebar from "./MobileSdebar"
import NavbarRoutes from "./NavbarRoutes"

const Navbar = () =>{
    return(
        <div className="p-4 h-full flex items-center shadow-sm border-b">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}

export default Navbar