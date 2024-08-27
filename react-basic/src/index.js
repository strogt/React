/*
  项目创建：npx create-react-app <项目名称>
*/

// react 项目核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入项目根组件
import App from './App';

// 导入redux
import store from './store';
import { Provider } from 'react-redux'

// 把APP根组件渲染到root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 开发模式下useEffect中的请求会请求两次，打包后正常
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
