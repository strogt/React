import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>这是登录页</p>
            <Link to="/article">跳去文章页</Link>
            <hr/>
            <button onClick={() => navigate("/article")}>跳去文章页</button>
            <hr/>
            <button onClick={()=>navigate("/article?id=01&title=红楼梦")}>searchParams传参</button>
        </div>
        
    )
}

export default Login