import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: 'counter',
    // 初始化state
    initialState: {
        count: 0
    },

    // 修改状态方法 同步方法 支持直接修改
    reducers: {
        inscrement(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addToNum(state, actions) {
            state.count += actions.payload
        }
    }
})

// 结构出来的actionCreater函数
const { inscrement, decrement,addToNum } = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

// 以按需导出的方式导出actionCreater
export { inscrement, decrement,addToNum }
// 已默认导出的方式导出reducer
export default reducer
