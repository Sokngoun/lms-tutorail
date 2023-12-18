import Navbar from "./_components/Navbar"
import Sidebar from "./_components/Sidebar"


const DashboardLayout = ({
    children
}:{
    children: React.ReactNode
}) =>{
    return (
        <div className="h-full">
            <div className="md:pl-56 h-[74px] fixed inset-y-0 z-50 w-full">
                <Navbar />
            </div>
            <div className="hidden md:flex flex-col w-56 fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-56 h-full mt-[80px] z-0">
             {children}
            </main>
        </div>
    )
}

export default DashboardLayout