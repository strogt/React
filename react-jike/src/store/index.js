// 组合子模块，导出store实例
import userStore from '@/store/modules/user.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        user: userStore,
    }
})

export default store