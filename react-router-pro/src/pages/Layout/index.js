import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            这是Layout
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout