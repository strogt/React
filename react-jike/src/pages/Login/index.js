import { Card, Form, Input, Button, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish =async (value) => {
        //  13800000002/13888888888  246810
        await dispatch(fetchLogin(value))
        // 1、跳转到首页
        navigate('/')
        // 2、提示用户
        message.success("登录成功")
    }
    return (
        <div className="login">
        <Card className="login-container">
            <img className="login-icon" src={logo} alt="" />
            {/* 登录菜单 */}
            <Form validateTrigger="onBlur" onFinish={onFinish}>
                
            <Form.Item
                name="mobile"
                rules={[
                { required: true, message: '请输入手机号' },
                {
                    pattern: /^1[3-9]\d{9}$/,
                    message: '请输入正确的手机号'
                }
                ]}
            >
                <Input size="large" placeholder="请输入手机号"></Input>
            </Form.Item>
            
            <Form.Item
                name="code"
                rules={[
                { required: true, message: '请输入验证码' }
                ]}
            >
                <Input size="large" placeholder="请输入验证码"></Input>
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                登录
                </Button>
            </Form.Item>
            </Form>
        </Card>
        </div>
    );
};

export default Login;
