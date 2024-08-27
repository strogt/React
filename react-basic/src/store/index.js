
/*
    依赖安装：npm i @reduxjs/toolkit react-redux
    大多数项目目录
    |_store
        |_modules // 子模块状态目录
          |_modules1.js
          |_modeles2.js
          |_...
        index.js 整合子模块状态导出  
*/

import { configureStore } from "@reduxjs/toolkit";
// 导入子模块
import counterStore from './modules/counterStore.js'
import channelStore from "./modules/channelStrore.js"

const store = configureStore({
    reducer: {
        counter: counterStore,
        channel: channelStore
    }
})

export default store