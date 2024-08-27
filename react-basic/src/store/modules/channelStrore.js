import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const channelStrore = createSlice({
    name: "channel",
    initialState: {
        channelList: [],
    },
    reducers: {
        setChannelList(state, actions) {
            state.channelList = actions.payload
        }
    }
})

// 异步请求
// 结构出来的actionCreater函数
// const { setChannelList } = channelStrore.actions

const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get('https://geek.itheima.net/v1_0/channels')
        dispatch(channelStrore.actions.setChannelList(res.data.data.channels))
    }
}
export { fetchChannelList }

// 获取reducer
const reducer = channelStrore.reducer
export default reducer