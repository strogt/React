import Login from "../pages/Login";
import GeekLayout from "../pages/GeekLayout";
import NotFound from '../pages/NotFound/index.js'
import { createBrowserRouter } from "react-router-dom";
import AuthRouter from "@/components/AuthRouter";
import Article from '@/pages/Article'
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRouter><GeekLayout /></AuthRouter>,
        // element: <GeekLayout />,
        children: [
            {
                index: true, // path为空，index为true都可以配置默认的二级路由
                element: <Home />
            },
            {
                path: '/article',
                element: <Article />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/publish',
                element: <Publish />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router