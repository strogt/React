import App from "../App";
import Login from "../pages/Login";
import Article from "../pages/Article";
import Layout from "../pages/Layout";
import About from '../pages/Layout/About/index.js'
import Borad from '../pages/Layout/Borad/index.js'
import NotFound from '../pages/NotFound/index.js'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            {
                path: '',
                // index: true, // path为空，index为true都可以配置默认的二级路由
                element: <About />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'borad',
                element: <Borad />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router