import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="flex-1 p-6">
         <Outlet />
    </div>
  )
}

export default AdminLayout