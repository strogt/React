// 账单列表相关的store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'billList',
    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改
        setBillList: (state,action) => {
            state.billList = action.payload
        },        
        // 同步添加账单方法
        addBill: (state, action) => {
            state.billList.push(action.payload)
        }
    }
})


const { setBillList, addBill } = billStore.actions

// 获取账单列表
const getBillList = () => {
    return async (dispatch) => {
        // 编写异步请求
        const res = await axios.get("http://localhost:8888/ka") 
        console.log("res----",res);
        // 触发reducer
        dispatch(setBillList(res.data))
    } 
}

// 提交
const addBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:8888/ka", data)
        console.log("res----", res);
        dispatch(addBill(res.data))
    }
}


export { getBillList, addBillList }

const reducer = billStore.reducer
export default reducer