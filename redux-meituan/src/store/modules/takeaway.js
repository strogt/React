import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name: 'foods', 
    initialState: {
        // 商品列表
        foodsList: [],
        // 菜单激活下标值
        activeIndex: 0,
        // 购物车列表
        cartList:[]

    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        setActiveIndex(state, action) {
            state.activeIndex = action.payload
            console.log(111);
        },
        addCart(state, action) {
            const item = state.cartList.find(item=> item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                action.payload.count = 1
                state.cartList.push(action.payload)
            }
        },
        // 购物车增加
        increCount(state,action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            console.log(item)
            item.count++
        },
        // 购物车减少
        decreCount(state,action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 0) {
                return
            }
            item.count--
        },
        clearCart(state) {
            state.cartList = []
        }
    }
})

// 异步获取部分
const { setFoodsList, setActiveIndex,addCart,increCount,decreCount,clearCart } = foodsStore.actions

const fetchFoodsList = () => {
    return async(dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway")
        // 调用dispatch函数提交action
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList, setActiveIndex, addCart, increCount, decreCount,clearCart }

const reducer = foodsStore.reducer

export default reducer