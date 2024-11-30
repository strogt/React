import { Layout, Popconfirm,Menu } from "antd";

import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import "./index.scss"
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserInfo } from "@/store/modules/user"
import { clearLoginInfo } from "@/store/modules/user";

const { Header, Sider } = Layout;
const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  // 菜单跳转
  const navigate = useNavigate()
  const onMenuClick = (router) => {
    const url = router.key
    navigate(url)
  }
  // 反向高亮
  const location = useLocation()
  const selectedKeys = location.pathname

  // 获取用户信息
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])
  
  const { userInfo } = useSelector(state => state.user)
  // 登录退出
  const loginOut = () => {
    dispatch(clearLoginInfo())
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">

          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出" okText="退出" cancelText="取消" onConfirm={loginOut}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            items={items}
            selectedKeys={selectedKeys}
            style={{ height: "100%", borderRight: 0 }}
            onClick={onMenuClick}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
