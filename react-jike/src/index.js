import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { RouterProvider } from 'react-router-dom';
import router from './router';

// 导入转态管理
import { Provider } from 'react-redux';
import store from './store';

// 样式reset
import "normalize.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

