import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

// 高阶组件
export const AuthRouter = ({ children }) => {
    const token = getToken()
    console.log("children---",children)
    if (token) {
        return <>{ children }</>
    } else {
        return <Navigate to={'/login'} replace />
    }
}

export default AuthRouter
