import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入路由
import { RouterProvider } from 'react-router-dom';
import router from './router';

// 导入主题文件
import './theme.css';

// 导入转态管理
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <RouterProvider router={router} />
  //   </Provider>
  // </React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);